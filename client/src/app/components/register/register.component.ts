import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users/users.service.js'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private UsersService: UsersService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+')]],
      lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+')]],
      userName: ['', [Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
      password: ['', [Validators.required, Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/')]],
      campoOculto1: [''], // Campo oculto 1
      campoOculto2: ['']  // Campo oculto 2
    });
  }


  Create(){
    // Verifica si los campos ocultos están vacíos
    if (this.loginForm.controls['campoOculto1'].value === '' && this.loginForm.controls['campoOculto2'].value === '') {
      this.UsersService.createUser(this.loginForm.value).subscribe(
        (response) => {
            console.log('Usuario creado exitosamente:', response);
            // Realiza acciones adicionales después de la creación exitosa del usuario
          },
          (error) => {
            console.error('Error al crear usuario:', error);
            // Maneja el error de creación del usuario
          }
        );
      }
    }
}
