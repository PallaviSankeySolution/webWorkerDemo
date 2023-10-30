import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import MarkerClusterer from '@googlemaps/markerclustererplus';
//import { MarkerClusterer } from "@googlemaps/markerclusterer";
//import * as MarkerClusterer from "@google/markerclusterer"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(GoogleMap) map!: GoogleMap;

  markers: google.maps.Marker[] = [];
  labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14,
    // mapTypeId: "satellite",
    // disableDefaultUI: true,
  };

  private getRandomCoordinate(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  ngAfterViewInit() {
    this.add500Markers();
  }
  
  // Add markers to the map
  add500Markers() {
    

    for (let i = 0; i < 500; i++) {
     
      const marker = new google.maps.Marker({
        position: {
          lat: this.getRandomCoordinate(38.5, 42.0),
          lng: this.getRandomCoordinate(-76.0, -73.5)
        },
        label: this.labels[i % this.labels.length],
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10, 
          fillColor: "red", 
          fillOpacity: 1,
          strokeWeight: 0 
        }
       
      });
      this.markers.push(marker);
      marker.setMap(this.map.googleMap!); // Add the marker to the map
    }
    this.addCluster()
  }

  addCluster() {
    // Create an instance of the Google Map
  const map = this.map?.googleMap; // Use optional chaining here
  const markers = this.markers;

  if (map) {
    alert(1)
    // Initialize the MarkerClusterer.
    const markerCluster = new MarkerClusterer(map, markers, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      gridSize: 60, // Adjust as needed
      maxZoom: 15, // Adjust as needed
    });
}
  }}