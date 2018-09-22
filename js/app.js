let ViewModel = function(){
  // Creating let locationList and searchedText (search input value) as observable array ad observable respectively.
  // Setting self as ViewModel's this to use in inner functions
  let self = this;
  this.locationList = ko.observableArray([]);
  this.searchedText = ko.observable('');
  this.listEmpty = ko.observable(false);

// Pushing each marker of markers array in LocationList observable array to keep track of.
  markers.forEach(function(marker){
    self.locationList.push(marker);
  });

 // Forcing following function to execute after search keyword is entered.
  this.searchedText.subscribe(function(newvalue){
    self.listEmpty(false);
    let newList = [];
    // Setting marker's visible that includes any letter of searched value and invisible that doesn't.
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].title.toLowerCase().includes(newvalue.toLowerCase())) {
            markers[i].setVisible(true);
            // Pushing the visible markers in newList.
            newList.push(markers[i]);
        } else {
            markers[i].setVisible(false);
        }
    }
    // Checking if list is empty, if yes, then display 'no results found' with visible data-bind
    if(!newList.length) {
      self.listEmpty(true);
    }
    // Pushing the updated newList in the locationList observable array
    self.locationList(newList);
  });

  // Function togglePanel to hide the slide-panel from screen
  this.togglePanel = function(){
    $('body').toggleClass('panel-hidden');
  }

  // Set animation on marker to bounce for 1500ms and then execute populateInfoWindow function
  this.highlightMarker = function(e){
    self.togglePanel();
    e.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){
      e.setAnimation(null);
    }, 1500);
    populateInfoWindow(e, largeInfowindow);
    }
  }
  // Creates infowindow for each marker
function populateInfoWindow(marker, infowindow) {
  infowindow.marker = marker;
  // Setting maximum width of infowindow
  infowindow.setOptions({maxWidth:250});
  // Setting content of infowindow to marker title and waiting icon
  infowindow.setContent(`<div class="text-center iw-header text-white m-2">${marker.title}</div><div class="text-center m-3"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>`);
  // Wikipedia Api Url and dataType set to jsonp
  const url = `http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages&list=search&titles=${marker.title}&pithumbsize=200&srsearch=${marker.title}`;
  const body = {dataType: 'jsonp'};
  // Fetching reponse from api and retrieving data and then setting content of infowindow to the snippet from wikipedia reponse
  // Catching error and setting content of infowindow to error message
  fetch(url, body)
    .then(response => response.json())
    .then(data => {
      infowindow.setContent(`<div class="text-center iw-header text-white m-2">${marker.title}</div><div class="m-2"><p class="iw-text">${data.query.search[0].snippet}<a class="text-primary" target="_blank" href="https://en.wikipedia.org/w/index.php?title=${marker.title}"> (Read more)</a></p><p class="mt-3">Attribution: Wikipedia, <a class="text-primary" target="_blank" href="https://en.wikipedia.org/w/index.php?title=${marker.title}">https://en.wikipedia.org/w/index.php?title=${marker.title}</a></p></div>`);
    }).catch(e => {
      infowindow.setContent(`<div class="text-center iw-header text-white m-2">${marker.title}</div><div class="m-2"><p class="iw-text text-danger">Sorry, Wikipedia API could not get loaded. Please try again!</p></div>`);
    });
  infowindow.open(map, marker);
  // Stop marker animation and set marker to null value
  infowindow.addListener('closeclick',function(){
    marker.setAnimation(null);
    infowindow.setMarker = null;
  });
}
