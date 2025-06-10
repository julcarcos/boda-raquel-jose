import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
    standalone: true,
  imports: [CommonModule],
  styleUrls: ['./detalles.component.css'],
  animations: [
    trigger('fadeSlideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class DetallesComponent implements AfterViewInit {
  timeline = [
    { hora: '12:15', titulo: 'Llegada', descripcion: 'Por favor, sed puntuales.', visible: false },
    { hora: '12:30', titulo: 'Ceremonia', descripcion: 'Ceremonia civil en los jardines.', visible: false },
    { hora: '13:30', titulo: 'Cóctel', descripcion: 'Aperitivos y bebidas.', visible: false },
    { hora: '15:00', titulo: 'Banquete', descripcion: 'Comida y celebración.', visible: false },
    { hora: '18:00', titulo: 'Baile', descripcion: 'Baile nupcial y barra libre.', visible: false },
    { hora: '00:00', titulo: 'Despedida', descripcion: 'Gracias por acompañarnos.', visible: false },
  ];

  @ViewChildren('timelineItem', { read: ElementRef }) items!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = this.items.toArray().findIndex(el => el.nativeElement === entry.target);
            if (index !== -1) {
              this.timeline[index].visible = true;
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    this.items.forEach(el => observer.observe(el.nativeElement));
  }
}