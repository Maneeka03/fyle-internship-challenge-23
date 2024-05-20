import { Component, Input } from '@angular/core';

import { User } from '../types/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  @Input() user!: User;
}
