import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service.js';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit  {
  users: any[] = [];
  editingUser: any = null;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    // Al inicializar el componente, llamar a la función para obtener todos los usuarios
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  editUser(user: any): void {
    this.editingUser = { ...user };
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Eliminar el usuario de la lista después de borrarlo exitosamente
        this.users = this.users.filter(u => u._id !== userId);
        console.log('Usuario eliminado:', userId);
      },
      (error: any) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }

  openEditModal(user: any): void {
    // Clona el objeto del usuario para no modificar directamente los datos del usuario original
    this.editingUser = { ...user };
  }

  saveChanges(): void {
    this.userService.updateUser(this.editingUser._id, this.editingUser).subscribe(
      () => {
        this.getAllUsers(); // Recargar la lista de usuarios después de guardar los cambios
        this.editingUser = null; // Cerrar el modal de edición
      },
      (error: any) => {
        console.error('Error al guardar los cambios:', error);
      }
    );
  }

  closeModal() {
    this.editingUser = null; // Establece editingBlog a null para ocultar el modal
  }

}
