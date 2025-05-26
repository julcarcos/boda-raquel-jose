import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HistoriaComponent } from './historia/historia.component';
import { DetallesComponent } from './detalles/detalles.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HistoriaComponent,
    DetallesComponent,
    GaleriaComponent,
    NavbarComponent,
    CountdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raquel y Jose';

  openedIndex: number | null = null;

  // Defino tipo para faqItems que tiene icon como SafeHtml
  faqItems: { question: string; icon: SafeHtml; answer: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    // Datos raw con iconos SVG como strings
    const rawFaqItems = [
      {
        question: '¿Cuándo y dónde será la boda?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
        answer: `Tanto la ceremonia como la celebración serán en <strong>Bodegas Fundador, Calle puerta de Rota, Jerez de la Frontera</strong>`,
      },
      {
        question: '¿A qué hora debo llegar?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>`,
        answer: 'La ceremonia comienza a las 12:30, así que agradeceríamos que los invitados llegaran sobre las 12:15',
      },
      // ... el resto igual
      {
        question: '¿Cuál es el código de vestimenta?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16 3.422a12.083 12.083 0 01-12.32 0L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7" /></svg>`,
        answer: 'Formal',
      },
      {
        question: '¿Hay estacionamiento disponible?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 17v-5m3 0a3 3 0 00-6 0v5m-3 0h12" /><path stroke-linecap="round" stroke-linejoin="round" d="M8 21h8a2 2 0 002-2v-5a6 6 0 00-12 0v5a2 2 0 002 2z" /></svg>`,
        answer: 'Hay parking disponible (confirmar con fundador cuántos)',
      },
      {
        question: '¿La ceremonia y la recepción serán en el mismo lugar?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10l9-7 9 7v11a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-11z" /></svg>`,
        answer: 'Sí',
      },
      {
        question: '¿Pueden asistir niños?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M8 21v-4a4 4 0 018 0v4" /></svg>`,
        answer: 'No',
      },
      {
        question: '¿Hay algún tipo de comida especial (vegetariana, vegana, sin gluten, etc.)?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h8m-8 5h6" /></svg>`,
        answer: 'Si tienes algún tipo de restricción en tu dieta por favor infórmanos en el formulario de confirmación de asistencia',
      },
      {
        question: '¿Dónde me hospedo si vengo de fuera?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4a2 2 0 012-2h2a2 2 0 012 2v4m4-6v6m4-8v8" /></svg>`,
        answer: 'Opciones:',
      },
      {
        question: '¿Cómo confirmo mi asistencia (RSVP)?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`,
        answer: 'Haz click en el link del menú superior, que te llevará a un formulario de confirmación',
      },
      {
        question: '¿Habrá transporte disponible después de la fiesta?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m-7-7h1m16 0h1m-8-4v8m-4-4h8" /></svg>`,
        answer: 'No hay medio de transporte privado. Los teléfonos de taxis en Jerez son:',
      },
      {
        question: '¿A quién puedo contactar si tengo dudas de último momento?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2 8.5a6.978 6.978 0 0010.5 10.5l2-2a1 1 0 011.2-.2 10.05 10.05 0 004-4 1 1 0 01-.2-1.2l-2-2z" /></svg>`,
        answer: `Puedes ponerte en contacto con nosotros sin problema:<br />Jose : 697452585<br />Raquel: 675611191`,
      },
    ];

    // Procesamos para marcar el icon como safe html
    this.faqItems = rawFaqItems.map(item => ({
      question: item.question,
      icon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
      answer: item.answer,
    }));
  }

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
