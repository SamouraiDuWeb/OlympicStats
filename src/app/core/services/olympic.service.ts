import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OlympicCountry } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<OlympicCountry[] | undefined>(undefined);

  constructor(private http: HttpClient) {}

  // TODO: improve error handling
  loadInitialData() {
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError(this.handleError)
    );
  }

  /*
    The problem is that the logging was just in the console
    we may want in the future to send a log in an external
    logging infrastructure
  */
  handleError(handleError: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (handleError.error instanceof ErrorEvent) {
      // client-side or network error occurred
      errorMessage = `An error occurred: ${handleError.error.message}`;
    } else {
      // server-side or network error occurred
      errorMessage = `Server returned code: ${handleError.status}, error message is: ${handleError.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getOlympicsByCountry(countryId : number) {
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      map(ol => ol.filter((val: OlympicCountry) => {
        val.id == countryId
      })),
      catchError(catchError(this.handleError))
    );
  }
}
