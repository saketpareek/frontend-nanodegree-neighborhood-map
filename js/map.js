// Create variables globally to availavable them in other function
let map, marker, markers = [];
let largeInfoWindow, bounds;

function initMap() {
  // Make map with center coordinates and zoom level
  map = new google.maps.Map($('#map-container')[0], {
    center: {lat: 28.613939, lng: 77.209021},
    zoom: 14
  });

// Create google maps infoWindow to display InfoWindow
// Create boundaries to focus on particular marker
  largeInfowindow = new google.maps.InfoWindow();
  bounds = new google.maps.LatLngBounds();

// Create markers based on the locationsArray in model.js and push markers in markers array
  for (let i=0; i<locationsArray.length; i++) {
    marker = new google.maps.Marker({
      title: locationsArray[i].name,
      position: locationsArray[i].center,
      map: map
    });
    markers.push(marker);
    // Set animation on marker to bounce for 1500ms and then execute populateInfoWindow function
    marker.addListener('click', function() {
      $('body').addClass('panel-hidden');
      let that = this;
      this.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){
        that.setAnimation(null);
      }, 1500);
      populateInfoWindow(this, largeInfowindow);
    });
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
  ko.applyBindings(new ViewModel());
  return markers;
}
