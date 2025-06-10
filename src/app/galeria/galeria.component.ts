import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  currentImage: number = 1;
  totalImages: number = 47;

  ngOnInit(): void {
    const storedImage = sessionStorage.getItem('currentImage');
    if (storedImage) {
      this.currentImage = parseInt(storedImage, 10);
    }
  }

  nextImage(): void {
    if (this.currentImage < this.totalImages) {
      this.currentImage++;
    } else {
      this.currentImage = 1;
    }
    sessionStorage.setItem('currentImage', this.currentImage.toString());
  }

  prevImage(): void {
    if (this.currentImage > 1) {
      this.currentImage--;
    } else {
      this.currentImage = this.totalImages;
    }
    sessionStorage.setItem('currentImage', this.currentImage.toString());
  }
}
