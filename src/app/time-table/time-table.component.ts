import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {DayService} from "../../services/day.service";
import {DayFactory} from "../../models/factories/DayFactory";

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})


export class TimeTableComponent implements OnInit {
  day: Day;
  presumedDay: Day;

  constructor(public dayService: DayService) {
  }

  ngOnInit(): void {
    this.dayService.getCurrentDay().subscribe(a => {
      this.presumedDay = a;
      if (this.presumedDay) {
        this.day = this.presumedDay;
      } else {
        this.day = DayFactory.averageDay().build();
        this.day.date = new Date();
      }
    });


  }


  validate() {
    this.dayService.saveDay(this.day).subscribe();
  }

}
