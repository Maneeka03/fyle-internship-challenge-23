import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }