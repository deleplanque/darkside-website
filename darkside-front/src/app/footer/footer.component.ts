import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectToAbout(): void {
    window.location.href = 'http://217.182.170.151:4444/accueil#about';
  }

  redirectToSalles(): void {
    window.location.href = 'http://217.182.170.151:4444/accueil#salles';
  }

  redirectToTarif(): void {
    window.location.href = 'http://217.182.170.151:4444/accueil#price';
  }

  redirectToContact(): void {
    window.location.href = 'http://217.182.170.151:4444/accueil#contact';
  }

}
