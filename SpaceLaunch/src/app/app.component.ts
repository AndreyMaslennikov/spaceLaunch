import { Component, OnInit } from '@angular/core';
import { RocketLaunch } from './services/entity/rocket-launch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public openList: boolean = true;
  public year: number;
  public filter: number;


  ngOnInit(): void {
  }
  onChangedYear(id: number) {
    this.year = id;
  }

  onChangedFilterType(filter: number) {
    this.filter = filter;
  }

  onselect(rocketLaunches: RocketLaunch[]){
    console.log(rocketLaunches);
  }
}
