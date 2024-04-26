import {  inject } from '@angular/core';
import { Router } from "@angular/router";



export const blockLock = () => {
    const router = inject(Router);

    // Verificar si localStorage está definido
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
        return true;
    } else {
        router.navigate(['/']);
        return false;
    }
}