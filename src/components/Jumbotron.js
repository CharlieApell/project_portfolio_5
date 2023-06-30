import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from "../styles/PostsPage.module.css";
import { Link } from "react-router-dom";

const JumboTron = () => {
  return (
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
          Sounds interesting? <span>Sign up now!</span>
        </Link>
  </Jumbotron>
  )
};

export default JumboTron;