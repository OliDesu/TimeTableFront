import {Injectable} from '@angular/core';
import {Day} from '../models/Day';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private baseUrl = 'http://localhost:8080/day'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getCurrentDay(): Observable<Day> {
    return this.http.get<Day>(`${this.baseUrl}/get`);
  }

  saveDay(day: Day): Observable<Day> {
    return this.http.post<Day>(`${this.baseUrl}/set`, day);
  }
}
