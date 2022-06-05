<h1 align="center">Ngx Demo App</h1>

<p align="center">
  <img alt="CI" src="https://github.com/ildar-icoosoft/ngx-demo-app/workflows/CI/badge.svg">

  <a href="https://codecov.io/gh/ildar-icoosoft/ngx-demo-app">
    <img src="https://codecov.io/gh/ildar-icoosoft/ngx-demo-app/branch/master/graph/badge.svg?token=PWWEME2J5G"/>
  </a>
</p>

<h4 align="center">Angular demo application containing typical pages with posts, albums and photos.</h4>

> ### The goal of the assignment of this application is to demonstrate my software engineering skills, especially around code organization, data structure use, problem-solving, and testing.

## Key Features

- Latest version of Angular
- Using four libraries for state management ([NgRx](https://ngrx.io/docs) + [NGXS](https://ngxs.io/) + [Akita](https://opensource.salesforce.com/akita/docs/store) + [Elf](https://ngneat.github.io/elf/))
- Each page takes a different approach to dealing with state (for example normalization using [normalizr](https://github.com/paularmstrong/normalizr))
- ESLint for code quality
- Bootstrap for UI
- Extreme usage of Type hinting via TypeScript
- Unit tests (Jest)
- End-to-End tests (Cypress)

## Getting started

You can view a live demo over at https://ildar-icoosoft.github.io/ngx-demo-app/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

## Backend API

The app uses these API endpoints to retrieve the data to display on the page.

- https://jsonplaceholder.typicode.com/posts/ to the list of posts.
- https://jsonplaceholder.typicode.com/posts/1/ to the details of post with ID 1.
- https://jsonplaceholder.typicode.com/albums/ to get list of albums.
- https://jsonplaceholder.typicode.com/albums/1/ to get details of album with ID 1.
- https://jsonplaceholder.typicode.com/photos/ to get list of photos.
- https://jsonplaceholder.typicode.com/photos/1/ to get details of photo with ID 1.
- https://jsonplaceholder.typicode.com/users/1/ to get details of user with ID 1.

## Pages

Each page is lazy-loaded, include a loading indicator.

### Dashboard page

The dashboard page shows a summary of each data and a statistics overview.

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/dashboard.png)

### Post list page

A clean list of posts with filtering, sorting, and pagination.

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/post-list.png)

### Post page

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/post.png)

### Album list page

A clean list of albums with filtering and infinite scroll.

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/album-list.png)

### Album page

Similar to other list pages, it has search and infinite scroll.

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/album.png)

### Photo list page

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/photo-list.png)

### Photo page

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/photo.png)

### User page

![screenshot](https://raw.githubusercontent.com/ildar-icoosoft/ngx-demo-app/master/src/assets/screenshots/user.png)
