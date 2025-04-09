import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component'
import { HistoriaComponent } from './historia/historia.component';
import { DetallesComponent } from './detalles/detalles.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RsvpComponent } from './rsvp/rsvp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HistoriaComponent, DetallesComponent, GaleriaComponent, RsvpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raquel y Jose';
}
