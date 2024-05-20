import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    const result = this.http.get(`${this.apiUrl}${username}`);
    console.log(result);
    return result;
  }

  getRepos(username: string, perPage: number, page: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}${username}/repos?per_page=${perPage}&page=${page}`
    );
  }
}
