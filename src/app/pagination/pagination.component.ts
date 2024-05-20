import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalPages = 0;
  @Output() pageEvent = new EventEmitter<PageEvent>();

  pageSizeOptions: number[] = [10, 20, 50, 100];
  pageSize = 10;
  pageIndex = 0;

  handlePageEvent(event: PageEvent) {
    this.pageEvent.emit(event);
  }

}
