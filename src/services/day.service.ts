import {Injectable} from '@angular/core';
import {Day} from '../models/Day';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private baseUrl = 'http://localhost:8080/day'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getCurrentDay(): Observable<Day> {
    return this.http.get<Day>(`${this.baseUrl}/get`);
  }
  getSpecificDay(day: Day): Observable<Day> {
    const formattedDate = formatDate(day.date, 'yyyy-MM-dd', 'en-US'); // Format the date to the desired format

    const url = `${this.baseUrl}/getSpecificDay?date=${formattedDate}`; // Append the formatted date to the URL

    return this.http.get<Day>(url);
  }

  getFilledDays(): Observable<Date[]> {
    return this.http.get<Date[]>(`${this.baseUrl}/getFilledDays`);
  }
  saveDay(day: Day): Observable<Day> {
    return this.http.post<Day>(`${this.baseUrl}/set`, day);
  }
}
