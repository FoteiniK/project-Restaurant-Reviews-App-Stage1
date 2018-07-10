# project-Restaurant Reviews App-Stage1

Sixth project for Udacity's FEND nanodegree program.


## Project Overview: Stage 1

For this project,we are given a static design that lacks accessibility. We will convert this design to be responsive on different sized displays and accessible for screen reader use. We will also begin converting this to a Progressive Web Application by caching some assets for offline use.
The given code has a lot of issues. It’s barely usable on a desktop browser or a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Our job is to update the code to resolve these issues while still maintaining the included functionality. 


## My steps to complete the project

1. I forked and cloned the google-maps branch of the [starter repository](https://github.com/udacity/mws-restaurant-stage-1).
2. After exploring the given code,I started converting the provided site to use a responsive design.
3. I implemented accessibility features in the HTML sites.
4. I added a ServiceWorker script to cache requests to all of the site’s assets so that any page that has been visited by a user will be accessible when the user is offline.

## Getting Started

 Clone the repository or download the zip-file of the master branch.



### Prerequisites
_Python_ :
If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.




### Installing
  In this folder,you need to start up a simple HTTP server to serve up the site files on your local computer by following those steps: 

1. In a terminal, check the version of Python you have: `python -V`. 

2. Using your terminal/command line, get inside the folder where these project files are kept: cd /path/to/the/project.
If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. 

3. With your server running, visit the site: `http://localhost:8000`








### Licence
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details




