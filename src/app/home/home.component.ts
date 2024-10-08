import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
announcementMessage: any;
upcomingLeaves: any;
recentLeaves: any;
applyForLeave() {
throw new Error('Method not implemented.');
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