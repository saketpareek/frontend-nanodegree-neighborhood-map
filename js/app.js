let ViewModel = function(){
  // Creating let locationList and searchedText (search input value) as observable array ad observable respectively.
  // Setting self as ViewModel's this to use in inner functions
  let self = this;
  this.locationList = ko.observableArray([]);
  this.searchedText = ko.observable('');

// Pushing each marker of markers array in LocationList observable array to keep track of.
  markers.forEach(function(marker){
    self.locationList.push(merker);
  });

 // Forcing following function to execute after search keyword is entered.
  this.searchedText.subscribe(function(newvalue){
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
    // Pushing the updated newList in the locationList observable array
    self.locationList(newList);
  });

  // Function togglePanel to hide the slide-panel from screen
  this.togglePanel = function(){
    $('body').toggleClass('panel-hidden');
  }

  this.highlightMarker = function(e){
    e.setAnimation(google.maps.Animation.BOUNCE);
  }
}
