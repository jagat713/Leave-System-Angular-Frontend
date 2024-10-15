import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ApplyLeaveComponent } from "../apply-leave/apply-leave.component";
import { RouterOutlet } from '@angular/router';
import { LeaveHistoryComponent } from "../leave-history/leave-history.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ApplyLeaveComponent, RouterOutlet, LeaveHistoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
announcementMessage: any;
upcomingLeaves: any;
recentLeaves: any;
ApplyFormVisibility:boolean=false;
LeaveHistoryVisibility:boolean=true;
applyForLeave() {
this.ApplyFormVisibility=!this.ApplyFormVisibility;
}
employeeName: any;
leaveBalance: any;
@Input()data:any;
employeedata:any;
CheckApplicationButton:Boolean=false;
ngOnInit()
{
  this.LeaveHistoryVisibility=false;
  setTimeout(() => {
    this.LeaveHistoryVisibility = true;
  }, 1000); 
  this.employeedata=this.data;
  console.log("below is your data");
  console.log(this.employeedata);
  this.employeeName=this.employeedata.employeeName;
  this.leaveBalance=this.employeedata.employeeLeaveBalance;
  if(this.employeedata.employeeRole=="TeamLeader")
  {
    this.CheckApplicationButton=true;
  }
}

onLeaveApplied(leaveDetails: any) {
  console.log('Leave applied successfully:', leaveDetails);
  // Perform further actions, such as updating UI, refreshing data, etc.
  this.LeaveHistoryVisibility=false;
  setTimeout(() => {
    this.LeaveHistoryVisibility = true;
  }, 1000); // Timeout with 0ms to trigger the UI update in the next cycle
}
}