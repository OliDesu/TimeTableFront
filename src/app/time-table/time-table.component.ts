import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {SlotFactory} from '../../models/factories/SlotFactory';
import {DayService} from "../../services/day.service";
import {DayFactory} from "../../models/factories/DayFactory";

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})


export class TimeTableComponent implements OnInit {
  day: Day;
constructor(public dayService:DayService) {
}

  ngOnInit(): void {
    // Getting the current Day
    this.day = DayFactory.averageDay().build();
    // Displaying the different Slots
    console.log(this.day)
  }


  validate() {
  console.log("Putting the fucking day")
    this.dayService.saveDay(this.day).subscribe();
  }

  get() {
    console.log("Putting the fucking day")
    this.dayService.getCurrentDay().subscribe();

  }
}
