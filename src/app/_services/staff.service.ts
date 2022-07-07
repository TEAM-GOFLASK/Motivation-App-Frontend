import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  apiUrl= environment.apiUrl

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any>{

    return this.http.get("https://software-dev-motivation.herokuapp.com/staff/post/ ")


  }
}










// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { firstValueFrom } from 'rxjs';
// import { map } from 'rxjs/operators';
// import {environment} from '../../environments/environment';
// import { Posts } from '../_models';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })


// export class StaffService {
//   api=environment.apiUrl

//   constructor(private http: HttpClient) {

//    }
//   //  // Http Headers
//   // httpOptions = {
//   //   headers: new HttpHeaders({
//   //     'Content-Type': 'application/json',
//   //   }),
//   // };
//   //  // GET
//   //  getPost(): Observable<any[]> {
//   //   return this.http
//   //     .get<any[]>(this.api + 'staff/post')
//   //     .pipe(retry(), catchError(this.errorHandl));
//   // }

//   //  getPost(id:number){
//   //    const url=`${api}/staff/posts/${id}`;
//   //   return firstValueFrom(this.http.get(url).toPromise()
//   //   )
//   // }




//   // Error handling
//   errorHandl(error) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(() => {
//       return errorMessage;
//     });
//   }

// }

