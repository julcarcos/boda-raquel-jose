import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HistoriaComponent } from './historia/historia.component';
import { DetallesComponent } from './detalles/detalles.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HistoriaComponent, DetallesComponent, GaleriaComponent, NavbarComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raquel y Jose';
  currentSection = 0; // Sección inicial

  goToSection(index: number) {
    this.currentSection = index; // Cambia la sección visible
  }
}
