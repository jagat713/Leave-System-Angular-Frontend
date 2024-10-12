import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'] // Note the correct plural form `styleUrls`
})
export class ApplyLeaveComponent implements OnInit {
  recentLeaves:any;
  @Input() employeeData: any;  // Input to receive data from HomeComponent
  
  // Initialize leave object with employeeId and teamLeaderId
  leave = {
    leaveType: '',
    leaveStart: '',
    leaveEnd: '',
    leaveReason: '',
    leaveEmployeeId: '',   // Initialized here
    teamLeaderId: ''     // Initialized here
  };

  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Vacation Leave', 'Maternity Leave'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Ensure that employeeId and teamLeaderId are set from employeeData
    if (this.employeeData) {
      this.leave.leaveEmployeeId = this.employeeData.employeeId;
      this.leave.teamLeaderId = this.employeeData.teamLeaderId; // Set the team leader ID
    }
    console.log("Employee data received in ApplyLeaveComponent:", this.employeeData);
  }

  onSubmit() {
    // Perform HTTP POST request to submit leave
    console.log(this.leave)
    console.log(typeof(this.leave.leaveStart))
    this.http.post("http://localhost:8080/apply-leave", this.leave).subscribe({
      next: (result: any) => {
        console.log('Leave Applied:', result);

        // Reset the form
        this.leave = {
          leaveType: '',
          leaveStart: '',
          leaveEnd: '',
          leaveReason: '',
          leaveEmployeeId: this.employeeData ? this.employeeData.employeeId : '',
          teamLeaderId: this.employeeData ? this.employeeData.teamLeaderId : ''  // Reset teamLeader correctly
        };
      },
      error: (err: any) => {
        console.error('Error applying for leave:', err);
      }
    });
  }
}
