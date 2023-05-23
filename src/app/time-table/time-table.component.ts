import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})


export class TimeTableComponent { times: string[] = [];
  inputs: { [key: string]: string } = {};

  constructor() {
    this.generateTimeTable();
  }

  generateTimeTable() {
    const startHour = 9;
    const endHour = 18;
    const interval = 30;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        this.times.push(time);
        this.inputs[time] = '';
      }
    }
  }

}
