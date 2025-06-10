import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, OnDestroy {
nextImage() {
throw new Error('Method not implemented.');
}
prevImage() {
throw new Error('Method not implemented.');
}
  currentImage: number = 1;
  private intervalId: any;
  totalImages: number = 47;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImage = this.currentImage < this.totalImages ? this.currentImage + 1 : 1;
    }, 3000); // Cambia cada 3 segundos
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
