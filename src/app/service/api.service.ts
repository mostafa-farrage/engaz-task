import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ResponseViewModel } from '../model/response.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //userToken: string;

  constructor(
    private _auth:AuthService,
    private http: HttpClient,
    private _router:Router,
  ) {
  }

  private setHeaders(withFiles: boolean = false): HttpHeaders {
    let headersConfig = {
      token: this._auth.getToken()
    };
   return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any): Observable<never> {
    if (error.status == 401) {
      this._router.navigateByUrl('/login')
    } else if (error.status == 500) {
      console.error('حدث خطأ من فضلك حاول لاحقاً');
    } else if (error.status ==  404) {
      console.error('حدث خطأ من فضلك حاول لاحقاً');
    }
    return observableThrowError(error);
  }

  get(path: string, params?: HttpParams): Observable<ResponseViewModel> {
    return this.http.get(`${environment.api}${path}`, { headers: this.setHeaders(), params }).pipe(
      catchError((er) => this.formatErrors(er)),map((res: ResponseViewModel) => res));
  }

  post(path: string,body): Observable<ResponseViewModel> {
    return this.http.post(`${environment.api}${path}`, body, {headers: this.setHeaders(),}).pipe(
      catchError(this.formatErrors),map((res: ResponseViewModel) => res));
  }

  put(path: string,body): Observable<ResponseViewModel> {
    return this.http.put(`${environment.api}${path}`, body, {headers: this.setHeaders(),})
      .pipe(catchError(this.formatErrors),map((res: ResponseViewModel) => res));
  }

  delete(path: string): Observable<ResponseViewModel> {
    return this.http.delete(`${environment.api}${path}`, { headers: this.setHeaders() })
      .pipe(catchError(this.formatErrors), map((res: ResponseViewModel) => res));
  }

}
