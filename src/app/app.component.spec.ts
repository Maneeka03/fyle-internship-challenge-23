import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ReposComponent } from './repos/repository.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        AppComponent,
        UserdetailsComponent,
        ReposComponent,
        PaginationComponent
      ],
      providers: [ApiService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GitHub User Profile'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GitHub User Profile');
  });

  it('should render title in an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('GitHub User Profile');
  });
});
