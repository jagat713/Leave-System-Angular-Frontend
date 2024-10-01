import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
@Output() send=new EventEmitter<any>()
landingPage()
{
  this.send.emit()
}
}
