import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';
  profile: any;
  repos: any[] = [];
  isLoading: boolean = false;
  pageSizes: number[] = [10, 25, 50, 100];
  page: number = 1;
  count:number=0
  pageSize:number=10
  searchClicked: boolean = false;
  totalPages: number = 0;
  constructor(private githubService:GithubService){}
  ngOnInit():void{
  }
    search():void{
      this.githubService.getUser(this.username).subscribe((profileData)=>{
        this.profile=profileData;
        this.profile.email = this.profile.email || 'Not Available';
        this.profile.linkedin_username = this.profile.linkedin_username || 'Not Available';
        this.searchClicked = true;
        this.fetchRepos();


      })

    }

    fetchRepos(): void {
          this.isLoading = true;
          this.githubService.getRepos(this.username).subscribe(
            (reposData) => {
              console.log(reposData);
              this.repos = reposData;
              this.isLoading = false;
              console.log(this.username);

            }
          );
    }
    onPageDataChange(event:any){
      this.page=event;
      this.fetchRepos();
    }
    onPageSizeChange(event:any):void{
      this.pageSize=event.target.value;
      this.page=1;
      this.fetchRepos();
}


}
