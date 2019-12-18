import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  selectedColor = "green";
  takeOffEnabled = true;

  takeOff(): void{
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
      this.message = "Shuttle in flight.";
      this.selectedColor = "blue";
      this.height = 10000;
      this.takeOffEnabled = false;
      console.log(this.height);
    } else {
      return;
    }
  }

  land(): void{
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.selectedColor = "green";
    this.height = 0;
    this.takeOffEnabled = true;
  }

  abortMission(): void{
    if(window.confirm("Do you really want to abort the mission?")){
      this.message = "Mission aborted";
      this.selectedColor = "red";
      this.height = 0;
      this.takeOffEnabled = true;
    }
  }

  moveRocket(direction: string): void{
    if(direction === "UP"){
      this.height += 10000;
    } else if(direction === "DOWN"){
      this.height -= 10000;
    } else if(direction === "LEFT"){
      this.width -= 10000;
    } else if(direction === "RIGHT"){
      this.width += 10000;
    }
    this.checkEdge();
  }

  checkEdge(): void{
    if(this.height > 320000 || this.height < 0 || this.width > 450000 || this.width < 0){
      this.selectedColor = "orange";
    } else{
      this.selectedColor = "blue";
    }
  }

}
