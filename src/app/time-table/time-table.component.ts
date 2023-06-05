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
  presumedDay: Day;
constructor(public dayService:DayService) {
}

  ngOnInit(): void {
     this.dayService.getCurrentDay().subscribe(a =>{
       this.presumedDay = a;
       console.log("aaaaaa",a);
       if(this.presumedDay){
         this.day = this.presumedDay;
         console.log('TU PUTA PADRE')

       }
       else{
         this.day = DayFactory.averageDay().build();
         this.day.date = new Date();
         // Displaying the different Slots
         console.log('TU PUTA MADRE')
       }
     })


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
