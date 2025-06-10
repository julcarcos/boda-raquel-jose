import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HistoriaComponent } from './historia/historia.component';
import { DetallesComponent } from './detalles/detalles.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

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
    SafeHtmlPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raquel y Jose';

  openedIndex: number | null = null;

  timeline: { hora: string; titulo: string; descripcion: string; icon: SafeHtml }[] = [];

  faqItems: { question: string; icon: SafeHtml; answer: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {
   const rawTimeline = [
    {
    hora: '12:15',
    titulo: 'Llegada',
    descripcion: 'Bienvenida a los invitados.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" class="w-6 h-6">
        <path d="M192 0c-35.3 0-64 28.7-64 64v160c0 17.7 14.3 32 32 32h96v48H64c-35.3 0-64 28.7-64 64v32h288v-32c0-35.3-28.7-64-64-64h-16v-48h96c17.7 0 32-14.3 32-32V64c0-35.3-28.7-64-64-64H192zM544 224h-32V64c0-17.7-14.3-32-32-32H416v320h96v-96h32c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"/>
      </svg>`,
  },
   {
    hora: '13:30',
    titulo: 'Cóctel',
    descripcion: 'Un brindis para celebrar juntos.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" class="w-6 h-6">
        <path d="M64 32h384c17.7 0 32 14.3 32 32 0 8.5-3.3 16.6-9.4 22.6L304 253.3V464h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V253.3L41.4 86.6C35.3 80.6 32 72.5 32 64c0-17.7 14.3-32 32-32zM143.7 160h224.6L416 128H96l47.7 32z"/>
      </svg>`,
  },
  {
    hora: '12:30',
    titulo: 'Ceremonia',
    descripcion: 'La ceremonia se celebrará.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="w-6 h-6">
        <path d="M320 32c-17.7 0-32 14.3-32 32v96H208V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H64c-17.7 0-32 14.3-32 32v320h576V192c0-17.7-14.3-32-32-32H496V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H352V64c0-17.7-14.3-32-32-32zM288 352c0-17.7 14.3-32 32-32s32 14.3 32 32v96H288v-96z"/>
      </svg>`,
  },
  {
    hora: '15:00',
    titulo: 'Banquete',
    descripcion: 'Disfrutaremos de una comida especial para todos.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6">
        <path d="M416 0c-17.7 0-32 14.3-32 32V96H128V32c0-17.7-14.3-32-32-32S64 14.3 64 32v96H0v64h64V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h256V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h64V128H448V32c0-17.7-14.3-32-32-32z"/>
      </svg>`,
  },
  {
    hora: '18:00',
    titulo: 'Baile',
    descripcion: 'Momento para bailar y celebrar con música.',
    icon: `
     <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="35px" height="65px" viewBox="0 0 260 260" enable-background="new 0 0 260 260" xml:space="preserve">
<path d="M32.478,129.993c0-6.691,5.422-12.114,12.111-12.114c6.689,0,12.111,5.424,12.111,12.114
	c0,6.691-5.422,12.114-12.111,12.114C37.901,142.107,32.478,136.683,32.478,129.993z M89.844,126.509
	c-2.74-1.858-6.473-1.143-8.333,1.6L69.381,146H29.975c-1.088,0-2.156,0.296-3.089,0.856L4.912,160.051
	c-2.332,1.399-3.431,4.193-2.676,6.807l6.458,22.38c0.758,2.629,3.157,4.339,5.762,4.339c0.551,0,1.111-0.077,1.667-0.237
	c3.184-0.919,5.02-4.244,4.101-7.428l-5.178-17.947L28,160.229V222l-16.566,24.971c-2.132,3.225-1.247,7.567,1.978,9.699
	c1.188,0.786,2.529,1.162,3.854,1.162c2.271,0,4.499-1.104,5.845-3.141l17.703-26.773c0.757-1.145,1.161-2.487,1.161-3.86v-20.074
	c0.503-0.013,0.999-0.034,1.484-0.068l8.516,20.79V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-27.673c0-0.91-0.177-1.812-0.522-2.653
	l-11.478-28.021V158h18.587c1.99,0,3.85-0.986,4.966-2.633l13.915-20.524C93.303,132.1,92.587,128.369,89.844,126.509z
	 M248.08,33.421c-2.593-1.264-5.159-2.546-7.697-3.845c-2.563-1.34-5.118-2.73-7.634-4.119c-4.699-2.599-9.289-5.262-13.788-7.974
	c-0.329,0.184-0.661,0.362-0.991,0.545c-0.026,5.356-0.248,10.582-0.545,15.919c-0.325,5.701-0.766,11.463-1.326,17.281
	c-9.503-6.017-18.646-12.449-27.3-18.981c-0.337,0.143-0.671,0.291-1.008,0.432c-0.649,5.207-1.394,10.456-2.256,15.751
	c-0.461,2.829-0.952,5.671-1.475,8.524c-0.524,2.851-1.068,5.741-1.688,8.52c-4.562-3.653-9.001-7.353-13.314-11.094
	c-4.035-3.509-7.934-6.989-11.793-10.708c-0.359,0.109-0.718,0.216-1.078,0.324c-1.194,5.117-2.487,10.264-3.902,15.446
	c-0.758,2.776-1.548,5.56-2.37,8.353c-0.837,2.735-1.711,5.456-2.615,8.196c-8.013-7.973-15.495-15.839-22.61-24.338
	c-0.374,0.07-0.749,0.133-1.123,0.203c-1.731,4.976-3.563,9.972-5.519,14.988l-1.597,4.038l-1.662,3.94
	c-1.124,2.627-2.281,5.257-3.471,7.892c-3.676-4.499-7.221-9.016-10.636-13.548c-3.188-4.24-6.28-8.691-9.253-13.063
	c-0.379,0.03-0.757,0.067-1.136,0.096c-2.25,4.779-4.602,9.569-7.077,14.364c-2.658,5.053-5.451,10.011-8.37,15.026
	c-3.178-4.848-6.227-9.701-9.147-14.553c-2.724-4.665-5.324-9.33-7.824-13.991c-0.382-0.009-0.762-0.026-1.144-0.036
	c-2.741,4.525-5.585,9.086-8.549,13.554c-3.171,4.699-6.471,9.39-9.901,14.07c-2.651-5.173-5.185-10.21-7.567-15.467
	c-2.222-4.919-4.32-9.824-6.315-14.715c-0.371-0.049-0.741-0.106-1.112-0.155c-1.493,1.97-2.999,3.94-4.542,5.904l-2.683,3.38
	l-2.715,3.267C9.694,71.196,5.912,75.526,2,79.83V50.714v-0.962v-4.138c20.565,4.315,41.867,6.602,63.697,6.602
	c62.298,0,120.348-18.48,169.002-50.216v0.001L246,1.999C246.982,12.411,247.987,22.759,248.08,33.421z M141.579,142.107
	c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114s-12.111,5.424-12.111,12.114
	C129.468,136.683,134.89,142.107,141.579,142.107z M190.012,175.023l-31.442-27.537c-1.094-0.958-2.499-1.486-3.953-1.486h-22.944
	c-1.325,0-2.612,0.438-3.662,1.247l-17.924,13.809l-13.515-11.678c-2.507-2.165-6.296-1.891-8.463,0.617
	c-2.167,2.507-1.89,6.296,0.617,8.463l17.22,14.88c2.157,1.863,5.327,1.952,7.584,0.213l16.471-12.69L130,197.429l-13.67,21.417
	c-0.537,0.842-0.888,1.788-1.029,2.776l-4.032,28.219c-0.547,3.827,2.112,7.373,5.939,7.92c0.336,0.048,0.669,0.071,0.999,0.071
	c3.427,0,6.422-2.52,6.921-6.011l3.817-26.72L142,204.65V251c0,3.866,3.134,7,7,7s7-3.134,7-7v-55v-4v-30.812l26.105,22.863
	c1.139,0.997,2.548,1.486,3.951,1.486c1.669,0,3.329-0.692,4.516-2.047C192.756,180.997,192.505,177.207,190.012,175.023z
	 M255.511,234.689l-21.518-18.366l-5.02-24.329V156.39l27.99-41.25c1.86-2.742,1.146-6.474-1.596-8.334
	c-2.743-1.861-6.474-1.146-8.334,1.596L221.522,146h-32.7l-16.73-14.769c-2.483-2.193-6.276-1.958-8.469,0.527
	c-2.193,2.484-1.957,6.276,0.527,8.469l18.432,16.271c1.097,0.968,2.509,1.502,3.971,1.502H203v93c0,3.866,3.108,7,6.974,7
	s7-3.134,7-7v-47.885l3.794,18.388c0.314,1.524,1.127,2.9,2.311,3.91l23.343,19.925c1.318,1.125,2.935,1.676,4.542,1.676
	c1.978,0,3.942-0.833,5.327-2.455C258.8,241.618,258.452,237.199,255.511,234.689z M210.669,141.855
	c6.689,0,12.111-5.424,12.111-12.114c0-6.691-5.422-12.114-12.111-12.114c-6.689,0-12.111,5.424-12.111,12.114
	C198.558,136.431,203.98,141.855,210.669,141.855z"/>
</svg>`,
  },
  {
    hora: '00:00',
    titulo: 'Despedida',
    descripcion: 'Un último adiós y agradecimiento por venir.',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" class="w-6 h-6">
        <path d="M320 0C143.6 0 0 143.6 0 320c0 35.3 28.7 64 64 64h96v-96h-96c0-141.4 114.6-256 256-256s256 114.6 256 256h-96v96h96c35.3 0 64-28.7 64-64C640 143.6 496.4 0 320 0z"/>
      </svg>`,
  }
];


    this.timeline = rawTimeline.map(item => ({
      ...item,
      icon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
    }));

    const rawFaqItems = [
      {
        question: '¿Cuándo y dónde será la boda?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
               </svg>`,
        answer: `Tanto la ceremonia como la celebración serán en <strong>Bodegas Fundador, Calle puerta de Rota, Jerez de la Frontera</strong>`,
      },
      {
        question: '¿A qué hora debo llegar?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle>
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/>
               </svg>`,
        answer: 'La ceremonia comienza a las 12:30, así que agradeceríamos que los invitados llegaran sobre las 12:15',
      },
      {
        question: '¿Cuál es el código de vestimenta?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16 3.422a12.083 12.083 0 01-12.32 0L12 14z" />
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7" />
               </svg>`,
        answer: 'Formal',
      },
      {
        question: '¿Hay estacionamiento disponible?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 17v-5m3 0a3 3 0 00-6 0v5m-3 0h12" />
                 <path stroke-linecap="round" stroke-linejoin="round" d="M8 21h8a2 2 0 002-2v-5a6 6 0 00-12 0v5a2 2 0 002 2z" />
               </svg>`,
        answer: 'Hay parking disponible (confirmar con fundador cuántos)',
      },
      {
        question: '¿La ceremonia y la recepción serán en el mismo lugar?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3 10l9-7 9 7v11a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-11z" />
               </svg>`,
        answer: 'Sí',
      },
      {
        question: '¿Pueden asistir niños?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"></circle>
                 <path stroke-linecap="round" stroke-linejoin="round" d="M8 21v-4a4 4 0 018 0v4" />
               </svg>`,
        answer: 'No',
      },
      {
        question: '¿Hay algún tipo de comida especial (vegetariana, vegana, sin gluten, etc.)?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h8m-8 5h6" />
               </svg>`,
        answer: 'Si tienes algún tipo de restricción en tu dieta por favor infórmanos en el formulario de confirmación de asistencia',
      },
      {
        question: '¿Dónde me hospedo si vengo de fuera?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4a2 2 0 012-2h2a2 2 0 012 2v4m4-6v6m4-8v8" />
               </svg>`,
        answer: 'Opciones:',
      },
      {
        question: '¿Cómo confirmo mi asistencia (RSVP)?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
               </svg>`,
        answer: 'Haz click en el link del menú superior, que te llevará a un formulario de confirmación',
      },
      {
        question: '¿Habrá transporte disponible después de la fiesta?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m-7-7h1m16 0h1m-8-4v8m-4-4h8" />
               </svg>`,
        answer: 'No hay medio de transporte privado. Los teléfonos de taxis en Jerez son:',
      },
      {
        question: '¿A quién puedo contactar si tengo dudas de último momento?',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M2 8.5a6.978 6.978 0 0010.5 10.5l2-2a1 1 0 011.2-.2 10.05 10.05 0 004-4 1 1 0 01-.2-1.2l-2-2z" />
               </svg>`,
        answer: `Puedes ponerte en contacto con nosotros sin problema:<br />Jose : 697452585<br />Raquel: 675611191`,
      },
    ];

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
