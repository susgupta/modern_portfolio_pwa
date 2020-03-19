# Sushil G Modern Portfolio Progressive Web App

Sushil G Modern Portolio PWA is **progressive web app** designed to showcase HTML, CSS (compiled from SASS) with minimal JavaScript. This application is focused on CSS using SASS to make site responsive on all platforms and devices.

In addition this app conforms to the [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) specification.

Included are

- manifest.json
- JavaScript Sevice worker to support offline caching.

Finally this app is hosted on https site to conform to the progressive web app spec.

**Update**

The applicarion is now available as desktop application for Windows (for now).

**NW.js** (previously known as node-webkit) was used to create builds for desktop application version.

Reference on [NW.js](https://nwjs.io/)

## Installation

NPM - Node Package Manager is used as node-sass npm is used to compile .scss files into css. A script can be used to compile .scss files in .css for the public dist folder

```bash
npm sass
```

To create the desktop builds can run the following commands based on package.json:

Run desktop build for development
```bash
npm run dev
```

Run desktop build for production in effect creates the binaries.
```bash
npm run prod
```

## Technologies Used

- HTML
- SCSS (SASS) with media queries
- JavaScript
- JavaScript Service Worker
- NW.js (to create desktop version)

## Real-Time Viewing For Web Version

The application was publised using [GitHub Pages](https://pages.github.com/). The public 'dist' folder is root of hosted application

Here is link to view the application:

[Sushil G Modern Portfolio PWA](https://susgupta.github.io/modern_portfolio_pwa/)

## Download The Desktop Version

For the simplest way is to get the binaries which are uploaded to the git repo.

1. Clone or download the repo
2. Go the the **/desktopappversion/** folder
3. Find the binary for your operating system.
