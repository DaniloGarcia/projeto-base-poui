import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  fazerLogin(usuario: PoPageLogin) {
    if (usuario.login === 'usuario' && usuario.password === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
