let markers = [];

function initMap() {
  let map = new google.maps.Map($('#map-container')[0], {
    center: {lat: 28.631451, lng: 77.216667},
    zoom: 14
  });

  for (let i=0; i<locationsArray.length; i++) {
    let marker = new google.maps.Marker({
      title: locationsArray[i].name,
      position: locationsArray[i].center,
      map: map
    });
    markers.push(marker);
  }
  return markers;
}
