import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HomeComponent, LandingComponent, CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Leave_System';
  LandingPageVisible:boolean=true;
  LoginVisible:boolean=false;
  HomeVisible:boolean=false;
  employeedata:any;
  displaylandingpage() {
    this.LandingPageVisible=false;
    this.LoginVisible=true;
    }
    displayLoginPage(data: { validation: any; result: any }) {
      console.log("Event data:", data.validation);
      this.LoginVisible = data.validation;  
      this.HomeVisible=true;
      this.employeedata=data.result;
      console.log(this.employeedata)
    }

}
