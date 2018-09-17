// Get map using google maps API to show in map-container element
// let map, marker;

$(function(){

  let ViewModel = function(){

    let self = this;
    this.locationList = ko.observableArray([]);

  // Function togglePanel to hide the slide-panel from screen
    this.togglePanel = function(){
      $('body').toggleClass('panel-hidden');
    }

    markers.forEach(function(loc){
      console.log(loc.title);
      self.locationList.push(loc);
    });
    var currMarker = self.locationList()[0];

    self.highlightMarker = function(e){
      e.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  ko.applyBindings(new ViewModel());
});
