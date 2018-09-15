let Model = function(){
}

let ViewModel = function(){
  this.togglePanel = function(){
    $('body').toggleClass('panel-hidden');
  }
}

ko.applyBindings(new ViewModel());

let map;
function initMap() {
  map = new google.maps.Map($('#map-container')[0], {
    center: {lat: 28.631451, lng: 77.216667},
    zoom: 14
  });
}
