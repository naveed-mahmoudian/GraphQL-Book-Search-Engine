# GraphQL Book Search Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

MERN stack application that allows users to sign up/log in and search for books. Books can also be saved to your user profile. Built with MERN, Google Books API, GraphQL, Apollo Server, and jsonwebtoken for user auth.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To install, please be sure you have Node.js installed on your machine. Then clone the repo and run `npm install` to install all required dependencies.

NOTE: To make use of JWT, include a `.env` file in the main directory, add `JWT_SECRET=`, and add your secret. If deploying yourself, be sure to include `MONGODB_URI=` and add your connection string from MongoDB atlas.

[Click Here for Github Repo](https://github.com/naveed-mahmoudian/GraphQL-Book-Search-Engine)

## Usage

To use this application in development or as a user, see below:

[Click Here for Deployed Application]()

- ### Development

To use this application as a developer, please insure you've installed all dependencies and run the `npm run develop` command. This will start the express server (default is PORT 3001), and the React Development Server (default is PORT 3000). When your browser opens you are free to develop the app further.

- ### User

To use this application as a user, you can simply search for books in the search bar (results provided by the Google Books API). To save books, you must log in or sign up from the homepage. After you have an account you should now be able to see the `Save This Book` button and save books to your account. You can view your saved books by clicking the link at the top right of the page.

## License

Copyright (c) 2023 Naveed Mahmoudian

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.

## Credits

This application was created by Naveed Mahmoudian.

## Questions

GitHub: [naveed-mahmoudian](https://www.github.com/naveed-mahmoudian/)

Email: nmahmoudian@gmail.com
