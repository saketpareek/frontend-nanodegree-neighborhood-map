let Model = function(){
}

let ViewModel = function(){
  this.togglePanel = function(){
    $('body').toggleClass('panel-hidden');
  }
}

ko.applyBindings(new ViewModel());

var map;
function initMap() {
  map = new google.maps.Map($('#map-container')[0], {
    center: {lat: 40.74135, lng: -73.99802},
    zoom: 14
  });
}
