import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ApplyLeaveComponent } from "../apply-leave/apply-leave.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ApplyLeaveComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
announcementMessage: any;
upcomingLeaves: any;
recentLeaves: any;
ApplyFormVisibility:boolean=false;
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
}