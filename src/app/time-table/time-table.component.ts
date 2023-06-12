import {Component, OnInit} from '@angular/core';
import {Day} from '../../models/Day';
import {DayService} from "../../services/day.service";
import {DayFactory} from "../../models/factories/DayFactory";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})


export class TimeTableComponent implements OnInit {
  day: Day;
  presumedDay: Day;
  filledDays: Date[] = [];
  chosenDate: Date;

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
    this.dayService.getFilledDays().subscribe(a => {
      this.filledDays = a;

    })


  }

  myFilter = (d: Date | null): boolean => {
    let factor = false;
    let dates: Date[] = [];
    this.filledDays.forEach(filledDay => {
      dates.push(new Date(filledDay.toString()))
    })
    this.filledDays.push(this.day?.date)
    dates.forEach(date => {
      if (date?.getDate() === d?.getDate() && date.getMonth() === d.getMonth() && date.getFullYear() === d.getFullYear()) {
        factor = true;
      }
    })
    ;
    return factor
  }

  validate() {
    this.dayService.saveDay(this.day).subscribe();
  }


  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.chosenDate = event.value;
    const day: Day = new Day(this.chosenDate, [],[])
    this.dayService.getSpecificDay(day).subscribe(chosen => {
      if (chosen.slots.length !== 0 || chosen.gratitudes.length !==0) {
        this.day = chosen;
      } else {
        this.day = DayFactory.averageDay().build();
        this.day.date = chosen.date;
      }
    });
  }
}
