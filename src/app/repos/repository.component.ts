import { Component, Input } from '@angular/core';
import { Repo } from '../types/repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {
  @Input() repos: Repo[] = []; // Input property for repos
  searchTerm: string = ''; // Property for the search term
  username: string = ''; // Define the username property

  constructor() {}

  get filteredRepos() {
    return this.repos.filter(repo =>
      repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted with username:', this.username);
    // You can add further logic like API calls or other operations here
  }
}
