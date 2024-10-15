import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  recentLeaves: any[] = [];  // Initialize as an empty array
  @Input() employeeData: any;  // Input to receive data from HomeComponent

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Ensure employeeData is passed to the API call
    console.log(this.employeeData);
    
    if (this.employeeData && this.employeeData.employeeId) {
      const employeeId = {
        employeeId: this.employeeData.employeeId
      };

      console.log(employeeId);

      // Make a POST request to fetch the leave history
      this.http.post("http://localhost:8080/all-leave", employeeId).subscribe(
        (result: any) => {
          this.recentLeaves = result;  // Store the result in recentLeaves
          console.log(this.recentLeaves);  // Log the recent leaves
        },
        (error) => {
          console.error('Error fetching leave history:', error);  // Handle errors
        }
      );
    } else {
      console.warn('No employee data or employeeId provided!');
    }
  }
}
