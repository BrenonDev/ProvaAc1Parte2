import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  showBanner: boolean = true;

  alternarBanner(): void {
    this.showBanner = !this.showBanner;
  }
}
