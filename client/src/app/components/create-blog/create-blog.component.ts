import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {
  newBlog: any

  constructor(private BlogService: BlogService ) { }

  showModal() {
    const modal = document.getElementById('mimodal') as HTMLDialogElement
    if (modal) {
      modal.showModal()
    }
  }

  closeModal() {
    const modal = document.getElementById('mimodal') as HTMLDialogElement
    if (modal) {
      modal.close()
    }
  }

  reloadPage(){
    location.reload()
  }

  CreateBlog(form: NgForm) {
    if (form.valid) {
      const newBlog = form.value;
      this.BlogService.CreateBlog(newBlog).subscribe(
        (response) => {
          console.log('Blog creado exitosamente:', response);    
      form.resetForm(); // Para limpiar el formulario después de enviarlo
      this.closeModal(); // Para cerrar el modal después de enviar el formulario
      this.reloadPage()
        },
        (error) => {
          console.error('Error al crear el blog:', error);
        }
      );
    }
  }

  checkRole(): boolean {
    if (typeof localStorage !== 'undefined') {
        const role = localStorage.getItem('role');
        return role === '661d22d55153f820096becae';
    }
    return false; // O devuelve un valor predeterminado si localStorage no está disponible
}

}
