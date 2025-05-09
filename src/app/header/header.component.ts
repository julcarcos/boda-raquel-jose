
import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CountdownComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
