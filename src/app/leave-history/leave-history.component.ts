import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-history.component.html',
  styleUrl: './leave-history.component.css'
})
export class LeaveHistoryComponent {
  recentLeaves: any;
}
