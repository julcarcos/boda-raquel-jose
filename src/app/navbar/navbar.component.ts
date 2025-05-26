import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,            // <-- aquí dices que es standalone
  imports: [CommonModule],      // <-- importa CommonModule para usar *ngIf, etc.
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  showLeftArrow = false;
  showRightArrow = false;

  ngAfterViewInit() {
    this.updateArrowVisibility();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateArrowVisibility();
  }

  onScrollCheck() {
    this.updateArrowVisibility();
  }

  scrollNav(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 100;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }

  private updateArrowVisibility() {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }

  navigateTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
