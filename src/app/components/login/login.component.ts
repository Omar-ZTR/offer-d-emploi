import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authSer: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  handleLogin() {
    if (this.loginForm.valid) {
      this.authSer.loginUser(this.loginForm.value).subscribe((data) => {
        let result: any = data;
        if (result.success) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('role', result.role);
          localStorage.setItem('userId', result.userId);
          if (result.role == 'freelancer') {
            this.router.navigate(['/freelanceur']);
            // nav to freelance
          } else if (result.role == 'client') {
            this.router.navigate(['/client']);
            // nav to client
          } else {
            this.router.navigate(['/admin']);
            // nav to admin
          }
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid Input',
        icon: 'error',
      });
    }
  }
}
