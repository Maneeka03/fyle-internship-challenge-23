import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { PageEvent } from '@angular/material/paginator';

import { User } from './types/user';
import { Repo } from './types/repo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'GitHub User Profile';
  username: string = '';
  githubUsername: string = '';

  user!: User;
  repos: Repo[] = [];
  pageIndex = 1;
  perPage = 10;

  repositories: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {}

  onSubmit() {
    this.fetchUserDetails(this.username);
    this.githubUsername = this.username;
  }

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.perPage = event.pageSize;
    this.getUserRepos(this.user.login);
  }

  private fetchUserDetails(username: string): void {
    this.loading = true;
    this.api.getUser(username).subscribe({
      next: (response) => {
        this.user = response;
        this.getUserRepos(this.user.login);
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
      complete: () => {
        console.log('Fetched user details successfully');
        this.loading = false;
      },
    });
  }

  private getUserRepos(username: string): void {
    this.loading = true;
    this.api.getRepos(username, this.perPage, this.pageIndex).subscribe({
      next: (response) => {
        this.repos = response;
      },
      error: (err) => {
        console.error('Error fetching repos:', err);
      },
      complete: () => {
        console.log('Fetched repos successfully', this.repos);
        this.loading = false;
      },
    });
  }
}
