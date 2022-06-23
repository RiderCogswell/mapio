export class CustomMap {
  // allows us to be the only one able to reach into this instance
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0 
      }
    });
  }
}