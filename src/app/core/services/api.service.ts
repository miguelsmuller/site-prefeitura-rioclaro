import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { INoticia } from '../interfaces/inoticia';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  options = {
    url: 'https://www.rioclaro.rj.gov.br/wp-json/wp/v2',
    count: '4',
    tag: '75',
  };

  constructor(private serviceRequest: HttpClient) {}

  getNews(prmQuantidade: number): Observable<INoticia[]> {
    const httpUrl = `${this.options.url}/posts`;

    let httpParams = new HttpParams();
    httpParams = httpParams.append('per_page', prmQuantidade.toString());
    httpParams = httpParams.append('_fields', 'title, link, date');

    return this.serviceRequest.get<INoticia[]>(httpUrl, { params: httpParams }).pipe(
      delay(3000),
      retry(1),
      catchError((error) => {
        return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
      })
    );
  }
}
