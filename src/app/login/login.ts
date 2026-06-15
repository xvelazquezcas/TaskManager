import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup;
  mensaje = '';

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });

  }

  iniciarSesion() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (
      email === 'usuario@gmail.com' &&
      password === '123456'
    ) {
      this.mensaje = ' Inicio de sesión correcto';
    } else {
      this.mensaje = ' Correo o contraseña incorrectos';
    }
  }

  loginGoogle() {
    alert('Login con Google próximamente');
  }

}
