import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientdetailsService } from 'src/app/clientdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  freelanceForm: FormGroup;
  profileImage: any;
  constructor(
    private fb: FormBuilder,

    private clientServ: ClientdetailsService
  ) {
    this.freelanceForm = fb.group({
      formation: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', Validators.required],
      city: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      level: ['', [Validators.required]],

      user: [localStorage.getItem('userId'), [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onChangeImg(event: any) {
    this.profileImage = event.target.files[0];
  }
  submitval() {
    let formData = new FormData();
    formData.append('formation', this.freelanceForm.value['formation']);
    formData.append('country', this.freelanceForm.value['country']);
    formData.append('city', this.freelanceForm.value['city']);
    formData.append('desc', this.freelanceForm.value['desc']);
    formData.append('experience', this.freelanceForm.value['experience']);
    formData.append('level', this.freelanceForm.value['level']);
    formData.append('phoneNumber', this.freelanceForm.value['phoneNumber']);
    formData.append('profileImage', this.profileImage);
    formData.append('user', this.freelanceForm.value['user']); 
    this.clientServ
      .addFreelance(formData)
      .subscribe((data: any) => {
        let result: any = data;
        console.log(result);
        if (result.success) {
          Swal.fire({
            title: 'Success',
            text: 'Data added..',
          });
          this.freelanceForm.reset();
        }
      });
  }
}
