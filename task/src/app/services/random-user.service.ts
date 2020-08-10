import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }
getData(): Observable<any>{
  const url = "https://raw.githubusercontent.com/Sindhumols/Pagination-api/master/github_issue_response.json"
  return this.http.get<any>(url)
}


}
