import { Component } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent,FooterComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
