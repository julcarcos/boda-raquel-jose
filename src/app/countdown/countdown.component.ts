import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
})
export class CountdownComponent implements OnInit, OnDestroy {
  weddingDate = new Date('2025-11-01T15:00:00'); // Fecha de la boda
  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private intervalId: any;

  ngOnInit(): void {
    // Verifica si ya hay un temporizador en sessionStorage
    const storedTimeLeft = sessionStorage.getItem('timeLeft');
    if (storedTimeLeft) {
      this.timeLeft = JSON.parse(storedTimeLeft);
    }

    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.weddingDate.getTime() - now;

      if (distance < 0) {
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        clearInterval(this.intervalId); // Detiene el temporizador si la fecha pasó
      } else {
        this.timeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        };

        // Almacenar la cuenta atrás en sessionStorage para evitar reinicios en el refresh
        sessionStorage.setItem('timeLeft', JSON.stringify(this.timeLeft));
      }
    }, 1000);
  }
}
