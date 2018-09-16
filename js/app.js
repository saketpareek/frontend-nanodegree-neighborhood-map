var locationsArray = [{
  name: 'Agrasen Ki Baoli',
  center: {lat: 28.626049, lng: 77.225038}
},{
  name: 'Hanuman Temple',
  center: {lat: 28.63019, lng: 77.213621}
},{
  name: 'Gurudwara Bangla Sahib',
  center: {lat: 28.626318, lng: 77.209186}
},{
  name: 'Jantar Mantar',
  center: {lat: 28.627055, lng: 77.216627}
},{
  name: 'Central Park',
  center: {lat: 28.632948, lng: 77.219465}
},{
  name: 'Janpath',
  center: {lat: 28.627817, lng: 77.218959}
},{
  name: 'Palika Bazar',
  center: {lat: 28.631009, lng: 77.2186}
}];


// Create model to store the data as observables

let Model = function(data){
  this.name= ko.observable(data.name);
  this.center = ko.observable(data.center);
}

// Create ViewModel that provide following functions


let ViewModel = function(){
  
  let self = this;
  this.locationList = ko.observableArray([]);


// Function togglePanel to hide the slide-panel from screen
  this.togglePanel = function(){
    $('body').toggleClass('panel-hidden');
  }



// Grab each object from locationsArray and create new model for each object and push in locationList observable array
  locationsArray.forEach(function(loc){
    self.locationList.push(new Model(loc));
  });
}

ko.applyBindings(new ViewModel());


// Get map using google maps API to show in map-container element
let map;
function initMap() {
  map = new google.maps.Map($('#map-container')[0], {
    center: {lat: 28.631451, lng: 77.216667},
    zoom: 14
  });
}
