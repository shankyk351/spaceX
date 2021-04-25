# SpaceX Launch Data Viewer Application

# Applicaton Link
[SpaceX Viewer (Click here)](https://spacex351.herokuapp.com/)

## Applicaton Stack

It's based on React Framework with Hooks implementation for state management and lifeCycles, also some route hooks are being used to handle the history and location for search query based filter implementation.

1. ReactJS
2. Razzle (SSR framework / boilerplate)
3. NodeJS (used by razzle to render the template on Server)
4. CSS Flexbox (for responsive design)
5. Express (Node JS framework for easy server implementation)
6. React-Router-DOM (for location and history handling)

# Running the Application on Local

``` npm install ```

and then

``` npm run start:dev```

## Build on local

``` npm run build ```

 and then 

 ``` npm start ``` to run production build on localhost

 ## running test cases

 ``` npm run test ``` to run test cases

# Features

## CSS Grid
custom bootstrap based grid is used with custom media queries

## SSR
the page is being delievered by using React renderToString using an express server, it's being done through a template called Razzle.

## Atomic Component Structure
the homepage uses atomic pattern, component based structure approach for increased code readality

## Route queryString based filters
the fitlers used here are route based query string filters.
