import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentModel = "pomodoro";

  constructor(
  ) { }

  ngOnInit() {

  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

}