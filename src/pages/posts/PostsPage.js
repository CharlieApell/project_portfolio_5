import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import Jumbotron from "react-bootstrap/Jumbotron";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from "react-router-dom/cjs/react-router-dom";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("newest");

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}search=${query}&ordering=${
            sorting === "newest" 
            ? "-created_at" 
            : sorting === "most_liked"
            ? "-likes_count"
            : "-comments_count"
          }`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, sorting, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {!currentUser && (
          <Jumbotron className={styles.Jumbotron}>
            <h1>Welcome to Foodie!</h1>
            <p>
            Are you tired of scrolling through your social media feed, only to be bombarded with countless selfies and memes? <br/><br/>
            Say goodbye to the monotony and discover Foodie - the perfect platform exclusively designed for food and drink enthusiasts like yourself.
            Here, you can share your lunch, cocktail creations or cherished family recipes<br/><br/>
            Join our thriving community and immerse yourself in a vibrant world where every bite becomes an opportunity to connect, explore, and ignite your culinary inspiration.<br/>
            Whether you're seeking mouthwatering recipes, restaurant recommendations, or simply want to indulge in the art of food photography, Foodie has it all.<br/>
            </p>
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Jumbotron>
        )}
        {currentUser && (
        <PopularProfiles mobile />
        )}
        <i className={`fas fa-search ${styles.SearchIcon}`}/>
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
          <Form.Control
            as="select"
            value={sorting}
            onChange={(event) => setSorting(event.target.value)}
            className={styles.SortSelect}
          >
            <option value="newest">Sort feed by Newest</option>
            <option value="most_liked">Sort feed by Most Liked</option>
            <option value="most_commented">Sort feed by Most Commented</option>
          </Form.Control>
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post
                    key={post.id}
                    {...post}
                    setPosts={setPosts}
                  />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      {currentUser && (
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
      )}
    </Row>
  );
}

export default PostsPage;
