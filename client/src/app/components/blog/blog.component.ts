import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  blogs: any[] = []
  editingBlog: any = null;

  constructor(private BlogService: BlogService, private platformLocation: PlatformLocation){}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.BlogService.getAllBlogs().subscribe(
      (response) => {
        this.blogs = response;
      },
      (error) => {
        console.error('Error al cargar los blogs:', error);
      }
    );
  }

  reloadPage(){
    location.reload()
  }

  async deleteBlog(blogId: string) {
    try {
      const deletedBlog = await this.BlogService.deleteBlog(blogId).toPromise();
      if (deletedBlog) {
        this.reloadPage()
        console.log('Blog eliminado satisfactoriamente');

      }
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
    }
  }

    // Método para abrir el modal de edición
    openEditModal(blog: any) {
      // Clona el objeto del blog para no modificar directamente los datos del blog original
      this.editingBlog = { ...blog };
    }
  
  saveChanges() {
    // Llama al servicio para actualizar el blog
    this.BlogService.updateBlog(this.editingBlog._id, this.editingBlog).subscribe(() => {
      this.reloadPage()
      this.editingBlog = null;
    });
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

  closeModal() {
    this.editingBlog = null; // Establece editingBlog a null para ocultar el modal
  }

}


