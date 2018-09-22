# Frontend Nanodegree Neighborhood Map

Neighborhood map is a project which uses google maps API to load the map of a particular area and display locations in a slide panel view as well as on the google map in form of markers. Clicking on locations/markers reveal an additional information about that partcular location using a 3rd party API, ie, Wikipedia.


## Getting Started

To get started,

```
$ git clone https://github.com/saketpareek/frontend-nanodegree-neighborhood-map.git

install Atom or any other code editor

```

## Prerequisites

In order to run this, you need, 

- Code Editor (Atom / Sublime text or eqv)
- Browser (Google chrome / mozilla firefox or eqv)


## Installing

Follow the steps below to get this project up and running on your system,

```
Open cloned project folder

Search for index.htm file

Open the file in any browser 

```

or

```
Open any code editor (eg, atom)

Open cloned project folder in code editor

Run the code via atom live server package in atom

```

## App Dependencies

1. The slide panel can be toggled with the use of toggle icon on top left side
2. Search for any location by entering keys in the search input in the slide panel 
3. If Searched text does not match any locations present in the list, no locations found error is displayed in slide panel
4. If searched text matches any location, it will be filtered from the list as well as their corresponding markers 
5. Click on any location provided in the slide panel present in the form of a list or on the markers present on the map
6. Clicking on any location must automatically hide slide panel
7. Upon clicking, the marker will open an infowindow above itself displaying a wikipedia article on the same 
8. Click on read more link on the infowindow to open wikipedia article for that location in a new tab
9. A dedicated link is also provided to the same wikipedia page in infowindow under attribution coloum
10. In case google map fails to load, slide panel is hidden and disabled, and an error message is displayed on the screen
11. In case infowindow fails to load, the infowindow content will display a message telling the same


## Built With

- HTML
- CSS 
- jQuery
- Bootstrap
- Knockoutjs
- Google Maps API
- Wikipedia API

## Refrences 

- http://api.jquery.com/category/events/
- https://developers.google.com/maps/documentation/javascript/reference/
- https://knockoutjs.com/documentation/introduction.html
- https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple-max
- https://forum.freecodecamp.org/t/how-to-include-images-in-wikipedia-api-search-results/24908
