import { inject } from '@angular/core';
import { Router } from "@angular/router";

export const blockPage = () => {
    const router = inject(Router);

    const role = localStorage.getItem('role');

    if (role && role === '661d22d55153f820096becae') {
        return true;
    } else {
        router.navigate(['/home']);
        return false;
    }
}
