import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(private router:Router, private platformLocation: PlatformLocation){}

  onClickLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.router.navigate(['login'])

  }

  checkRole(): boolean {
    if (this.isPlatformBrowser()) {
      const role = localStorage.getItem('role');
      return role === '661d22d55153f820096becae';
    }
    return false; // Si no está en el navegador, devuelve falso
  }

  private isPlatformBrowser(): boolean {
    return this.platformLocation instanceof PlatformLocation;
  }

}
