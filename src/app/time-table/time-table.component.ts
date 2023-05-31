import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {SlotFactory} from '../../models/factories/SlotFactory';
import {DayService} from "../../services/day.service";

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
    this.day = new Day(1, new Date(20, 2, 1998),
      [SlotFactory.slot1().build(),
        SlotFactory.slot2().build(),
        SlotFactory.slot3().build(),
        SlotFactory.slot4().build()]);
    // Displaying the different Slots
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
