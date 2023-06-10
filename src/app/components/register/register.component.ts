import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authSer: AuthService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      username: ['', [Validators.required]],
      role: ['', []],
      dateofbirth: [Date.now().toLocaleString(), [Validators.required]],
    });
  }

  ngOnInit(): void {
    let role = localStorage.getItem('selectedRole');
    this.registerForm.controls['role'].setValue(role);
    localStorage.removeItem('selectedRole');
  }
  submitRegister() {
    this.authSer.registerUser(this.registerForm.value).subscribe((data) => {
      let result: any = data;
      console.log(result);
      if (result.success) {
        Swal.fire({
          title: 'Succcess!',
          text: 'Registration completed',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }
    });
    console.log(this.registerForm);
  }
}
