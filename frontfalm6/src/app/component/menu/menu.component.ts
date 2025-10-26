import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public authService: AuthService, private router: Router) {}



  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige al login tras cerrar sesión
  }

}
