import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Day} from '../models/Day';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  private baseURL = 'localhost:8080/getTodayDay';

  constructor(private http: HttpClient) {
  }

  getDay(): Observable<Day> {
    return this.http.get<Day>(this.baseURL);
  }
}
