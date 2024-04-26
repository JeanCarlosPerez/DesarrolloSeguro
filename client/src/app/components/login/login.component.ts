import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formUser = new FormGroup({
    'userName': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  showAlert= false;
  alertMessage: string = '';
  AlertMessage = false

  constructor(private UsersService: UsersService, private router:Router) { }

  navigateToHome() {
    this.router.navigate(["/home"])
}

  Login() {
    if (this.formUser.valid) {
      const credentials = {
        userName: this.formUser.value.userName,
        password: this.formUser.value.password
      };

      this.UsersService.loginUser(credentials).subscribe(
        (response) => {
          console.log('Login con éxito:', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.roles);
          this.alertMessage = '¡Bienvenido, ' + credentials.userName + '!';
          this.AlertMessage = true;
          setTimeout(() => {
            this.navigateToHome();
        }, 2000);
        },
        (error) => {
          if(error.status === 400){
          console.error('Error al logear:', error);
          this.alertMessage = 'Error en Usuario/Contraseña';
          this.AlertMessage = true;
          setTimeout(() => {
            this.AlertMessage = false;
        }, 2000);
        } else{
          this.alertMessage = 'Haz superado el numero de intentos';
          this.AlertMessage = true;
          setTimeout(() => {
            this.AlertMessage = false;
          }, 2000);
        }
        }
      );
    }
  }
}
