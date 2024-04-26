import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UsersComponent } from '../../components/users/users.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, UsersComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
