


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getRepos(username: string): Observable<any[]> {
    return this.getAllRepos(username, 1, []);
  }

  private getAllRepos(username: string, page: number, accumulatedRepos: any[]): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', '100');  // Maximum per_page value allowed by GitHub API

    return this.http.get<any[]>(`${this.baseUrl}${username}/repos`, { params }).pipe(
      mergeMap((repos: any[]) => {
        if (repos.length > 0) {
          const updatedRepos = accumulatedRepos.concat(repos);
          return this.getAllRepos(username, page + 1, updatedRepos);
        } else {
          return of(accumulatedRepos);
        }
      }),
      catchError(error => {
        console.error('Error fetching repositories', error);
        return of(accumulatedRepos);
      })
    );
  }

  getUser(username: string): Observable<any> {
    return this.http.get(this.baseUrl + username);
  }
}






