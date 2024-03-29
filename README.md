# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
  - [How to run](#how-to-run)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Solution URL: [github link](https://github.com/ankan-782/manage-landing-page-html-css-javascript)
- Live Site URL: [live site link](https://manage-landing-page-rav.netlify.app)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### How to run

- Clone the repository:

```bash
git clone https://github.com/ankan-782/manage-landing-page-html-css-javascript.git
```

- Navigate to the project directory:

```bash
cd manage-landing-page-html-css-javascript
```

- Install dependencies:

```bash
npm install
```

- run the project:

```bash
npm run dev
```

### Screenshot

![screenshot 1](./assets/images/screenshots/Screenshot%20of%20Manage-Landing-Page%201920-1080.png)

![screenshot 2](./assets/images/screenshots/Screen%20Shot%201.png)

![screenshot 3](./assets/images/screenshots/Screen%20Shot%202.png)

![screenshot 4](./assets/images/screenshots/Screen%20Shot%203.png)

![screenshot 5](./assets/images/screenshots/Screen%20Shot%204.png)

![screenshot 6](./assets/images/screenshots/Screen%20Shot%205.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex-box
- CSS Grid
- Position
- Mobile-first workflow
- Javascript

### What I learned

- First of all I have learned how to design a full web app not only for normal users but also for screen readers. Although I knew basic accessibility about every application should be designed a way that screen readers can also go through every page. But during the project, I have learned and applied more accessibility settings.

- I have learned and applied more css "base styles" and "reset styles" for any kind of web application.
Without using any css framework. Just using vanilla css. One example is given below:

```css
ul[role='list'],
ol[role='list'] {
    list-style: none;
}
```

- I knew little bit about css custom properties and the uses of those. But during doing the project, I have found many more uses of css custom properties and I used those maximum of creating utility classes. Like:

```css
:root {
    --fs-40: 2.5rem;
    /* ---------------- */
    /* ---------------- */
    --fs-primary-heading: var(--fs-40);
}

.fs-primary-heading {
    font-size: var(--fs-primary-heading);
}
```

### Continued development

*These are the areas that I would like to focus more in future projects*

- I found learning and applying more creating css custom properties and more utility classes and use those developing the site more effectively.

### Useful resources

- [Andy Bell modern css reset](https://andy-bell.co.uk/a-modern-css-reset/) - This helped me for writing css "base style" and "reset style" reason. I really liked this pattern and will use it going forward.
- [a11y js slider](https://a11yslider.js.org/) - This is a website called a11y slider which is basically applying different slider into websites. I brought a slider and applied in carousel section.

## Author

- Website - [Avijit Roy](https://avijit-roy-portfolio.netlify.app/)
- Frontend Mentor - [@ankan-782](https://www.frontendmentor.io/profile/ankan-782)
- Twitter - [@AvijitAnkan](https://twitter.com/AvijitAnkan)
