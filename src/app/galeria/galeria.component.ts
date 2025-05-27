import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, OnDestroy {
  currentImage: number = 1;
  totalImages: number = 47;
  private intervalId: any;

  ngOnInit() {
    const storedImage = sessionStorage.getItem('currentImage');
    if (storedImage) {
      this.currentImage = parseInt(storedImage, 10);
    }

    this.intervalId = setInterval(() => {
      this.currentImage = this.currentImage < this.totalImages ? this.currentImage + 1 : 1;

      // Guardar en sessionStorage para mantener el valor en caso de refresh
      sessionStorage.setItem('currentImage', this.currentImage.toString());
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
