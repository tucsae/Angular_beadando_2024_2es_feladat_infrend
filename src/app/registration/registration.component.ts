import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDTO, UserDTO } from 'models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
    name: this.formBuilder.control(''),
    phone: this.formBuilder.control(''),
    address: this.formBuilder.control(''),
    personalIdNumber: this.formBuilder.control(''),
    isActive: this.formBuilder.control(true),
    borrowedItems: this.formBuilder.control([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService) { }

  registration() {
    const data = this.registrationForm.value as UserDTO;

    this.userService.create(data).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        this.toastrService.error(err.error.error, 'Error');
      }
    });
  }
}
