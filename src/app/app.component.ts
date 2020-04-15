import { Component, Input } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];
  displayList: Satellite[];

  constructor(){
    /*
    this.sourceList = [
      new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
      new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
      new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
      new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
      new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
   ];
   */
   this.sourceList = [];
   this.displayList = [];
  let satellitesURL = "https://handlers.education.launchcode.org/static/satellites.json";
   window.fetch(satellitesURL).then(function(res){
     res.json().then(function(data){
       /*
       // Good
      let fetchedSatellites = data.satellites;
      for(let i = 0; i < fetchedSatellites.length; i++){
        let satellite = new Satellite(
          fetchedSatellites[i].name,
          fetchedSatellites[i].type,
          fetchedSatellites[i].launchDate,
          fetchedSatellites[i].orbitType,
          fetchedSatellites[i].operational
        );
        this.sourceList.push(satellite);
      }
      */

      // Better!
      for(const satellite of data.satellites){
        this.sourceList.push(new Satellite(
          satellite.name,
          satellite.type,
          satellite.launchDate,
          satellite.orbitType,
          satellite.operational
        ));
      }

      // Make a copy of the source list to be shown to the user.
      // If this line does not exist, the table data won't appear
      // TODO: Can we list more than one item this way? (Check slice(), it should.)
      this.displayList = this.sourceList.slice(0);

     }.bind(this));   // They SHOULD explain bind!
   }.bind(this));     // They should also point out how you can't use arrow functions when using bind!
  }

  // TODO: See if filter could be applied?
  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let satellite of this.sourceList){
      let name = satellite.name.toLowerCase();
      if(name.indexOf(searchTerm) >= 0){
        matchingSatellites.push(satellite);
      }
    }
    this.displayList = matchingSatellites;
  }
}
