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
    - Header
    - Routing of App
    - Login Form
    - Sign up Form
    - Form Validation
    - useRef Hook
    - Firebase Project setup
    - Firebase web app project
    - Firebase Hosting
    - Install Fiebase and Create utils/firebase.js
    - npm install -g firebase-tools
            Note I am using
            npm install -g firebase-tools@11.0.0
            because my node version is 14 or you can switch node vesion using nvm (nvm install 18 then nvm use 18)
    - Fiebase login
    - Fiebase init
    - npm run build
    - Fiebase deploy
    - Fiebase signIn and signUp API
    - Install redux
    - Utils
        appStore.js
        Create slice (ex: useSlice/cardSlice)
        Import slice in appStore reducer
        Provide store to body or App.js
    - Fiebase onAuthStateChanged API
    - Bowser and Header Component
    - Signout
    - Update displayName when Signup
    - Fix redirect issue (AuthGuard)
    - unsubscribe onAuthStateChanged
    - Register for TMDB and get API key (https://developer.themoviedb.org/reference/movie-now-playing-list)

    - Planning for MainContainer and Secondary Container
    - fetch now playing movie API inside browse
    - Add data to redux store
    - Create custom hook to call movie API and call in browse component
    - Add trailer to redux store

    - Create Custom hook for trailer video (API call for movie video by id)
    - Update store with Trailer Video Data
    - Embaded the youtube video and make it autoplay
    - Tailwind Classes to make Main Container look awesome
    - Build Secondary component
    - Planning for Secondary Container Component
    - Create Component for secondary/movie list/movie card
    - img cdn url to const
    - Movie card loop with map and add key
    - Tailwind to movie card and movie list
    - Create hook for popular/trending movies
    - fetch for popular/trending movies
    - Movie slice for popular/trending

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

- npm i react-router-dom
- npm i firebase
- npm i -g firebase-tools
- npm i -D @reduxjs/toolkit
- npm i -D react-redux
