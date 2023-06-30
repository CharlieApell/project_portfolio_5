# Foodie - Testing 

[Main README.md file](/README.md)

[View live project](https://pp5-capell-745fa2049c09.herokuapp.com/)

[View GitHub repository](https://github.com/CharlieApell/project_portfolio_5)

***
## Table of contents
- [Performance](#performance)
  - [Google's Lighthouse Performance](#googles-lighthouse-performance)
- [Code Validation](#code-validation)
  - [HTML](#html)
  - [CSS](#css)
  - [PEP8 Validation](#pep8)
- [Testing User Stories](#Testing-User-Stories)
- [Manual Testing](#Manual-Testing)
    - [Common Elements Testing](#common-elements-testing)
    - [Home Page](#home-page)
    - [Profile Page](#profile-page)
    - [Posts](#posts)
    - [Comments](#comments)
    - [Follow/Unfollow](#followunfollow)
    - [Sign in/Sign Out/Sign Up](#sign-insign-outsign-up)
    - [Pages are Responsive](#pages-are-responsive)
    - [Browser Validation](#Browser-Validation)

***

## Performance

### Google's Lighthouse Performance
[Google Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test the performance of the website.<br>
There's still a lot I could do to maximize the performance but with the time given and the deadline closing in I had to settle with this.
### Desktop Results:
- [Lighthouse Desktop Logged In Result](./src/assets/testing/lh-loggedin.png).<br>
- [Lighthouse Desktop Logged Out Result](./src/assets/testing/lh-loggedout.png).

### Mobile Results:
- [Lighthouse Mobile Logged In Result](./src/assets/testing/lh-loggedin-m.png).<br>
- [Lighthouse Mobile Logged Out Result](./src/assets/testing/lh-loggedout-m.png).

***

## Code Validation

### HTML
The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML of the website.
 - Result for [HTML](./src/assets/testing/w3chtml.png)

### CSS
The [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/) was used for validating the CSS stylesheets.
- Result for [CSS](./src/assets/testing/w3ccss.png)

### PEP8
The PEP8 Python Validator in GitPod was used to check that the Python code in my API meets PEP8 standards.

- Result for [API](./src/assets/testing/pep8.png)

***

## Testing User Stories

#### User Stories:
All User Stories as been tested with no issues found.
- [User Stories](https://github.com/CharlieApell/project_portfolio_5/issues)
- [Kanban Board](https://github.com/users/CharlieApell/projects/7)

***

## Automated Testing

For this project, I have writing automated tests for several components: Asset, JumboTron, MoreDropDown, NavBar and NotFound.

I have utilized React Testing Library MSW to write these tests. You can find all the tests **[here](https://github.com/CharlieApell/project_portfolio_5/tree/main/src/components/__tests__)**.<br>
Mock handlers and server setup can be found **[here](https://github.com/CharlieApell/project_portfolio_5/blob/main/src/mocks/handlers.js)** and **[here](https://github.com/CharlieApell/project_portfolio_5/blob/main/src/setupTests.js)**.<br>

I have executed all the automated tests using npm, and they have successfully passed.

- Result for [Npm Test](./src/assets/testing/mswnpm.png)

## Manual Testing

During development, I relied on Google developer tools to verify the proper functioning of all components and troubleshoot any unexpected problems.

### Common Elements Testing
Manual testing was performed on the following elements present on each page:

- Test the functionality of the Logo by ensuring it redirects to the home screen.

- Test the navigation links to verify they are working correctly.

### Home Page
Manual testing was conducted on the following elements of the [Home Page](https://pp5-capell-745fa2049c09.herokuapp.com/):
     
- Test that jumbotron is showned only to logged out users.

- Test that popular profiles is showned only to logged in users.

### Profile Page
Manual testing was conducted on the following elements of the [Profile Page](https://pp5-capell-745fa2049c09.herokuapp.com/)

- Test that username, password and profile can be edited by owner.

### Posts
Manual testing was conducted on the following elements of the [Posts](https://pp5-capell-745fa2049c09.herokuapp.com/)

- Test that posts can be liked and unliked when logged in.

- Test that posts can't be liked by owner.

- Test that posts can be uploaded.

- Test that posts can be edited by owner.

- Test that posts can only be deleted by owner.

- Test that a warning message is given when a user deletes a posts.

### Comments
Manual testing was conducted on the following elements of the [Comments](https://pp5-capell-745fa2049c09.herokuapp.com/)
     
- Test that comments can be submitted.

- Test that comments can be edited by owner.

- Test that comments can only be deleted by owner.

- Test that a warning message is given when a user deletes a commment.

### Follow/Unfollow
Manual testing was conducted on the following elements of the [Follow/Unfollow](https://pp5-capell-745fa2049c09.herokuapp.com/)

- Test that you can follow or unfollow a user.

- Test that user can't be followed by owner.
     
### Sign in/Sign Out/Sign Up/
Manual testing was conducted on the following elements of the [Sign in/Sign out/Sign up](https://pp5-capell-745fa2049c09.herokuapp.com/)

- Users can register, login and logout.

### Pages are Responsive
- Manual testing was conducted for responsiveness on large, medium and small screens.

### Browser Validation
- Chrome
- Safari
- Firefox

***