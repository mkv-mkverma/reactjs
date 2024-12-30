# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# npx create-react-app netflix-gpt

cd netflix-gpt

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# TAILWINDCSS installation

https://tailwindcss.com/docs/guides/create-react-app

npm install -D tailwindcss
npx tailwindcss init

tailwind.confg.js
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run start

# Netflix GPT

    - Create Reach App
    - Configured TailwindCss

# Feature

    - Login / Signup
        - Sign In / Sign up Form
        - redirect to Browse page
    - Browse (comes after authentication)
        - Header
        - Main Movie
            - Tailer in BackGround
            - Title & Description
            - Movie Suggestions
                - MovieLists * N
    - NetflixGPT
        - Search Bar
        - Movie Suggestions

# create functional component

rafce then tab

# install routing

npm i react-router-dom
