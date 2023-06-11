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
  filledDays : Date[] = [];
  chosenDate :Date;

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

    this.dayService.getFilledDays().subscribe(a =>{
      this.filledDays = a;
      console.log(a)

    })


  }

  myFilter = (d: Date | null): boolean => {
    let a= false;
    let dates: Date[] = [];
    console.log()
    this.filledDays.forEach(a =>{
      dates.push(new Date(a.toString()))
  })
    dates.forEach(date =>{
     if(  date.getDate() === d.getDate() && date.getMonth() === d.getMonth() && date.getFullYear() === d.getFullYear()){
       a = true;
     }
    })
  ;   return a}

  validate() {
    this.dayService.saveDay(this.day).subscribe();
  }


  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.chosenDate = event.value;
    const day : Day = new Day( this.chosenDate,[])
    this.dayService.getSpecificDay(day).subscribe(chosen =>{
      if (chosen.slots.length!==0) {
        this.day = chosen;
      } else {
        this.day = DayFactory.averageDay().build();
        this.day.date = new Date();
      }

    });
  }
}
