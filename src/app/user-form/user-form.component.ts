import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDTO } from 'models';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  isNewUser = true;

  users: UserDTO[] = [];

  userForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control(''),
    phone: this.formBuilder.control(''),
    personalIdNumber: this.formBuilder.control(''),
    address: this.formBuilder.control(''),
    isActive: this.formBuilder.control(false)
  });
  
  toastrService: any;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id)
    {
      this.isNewUser = false;

      this.userService.getOne(id).subscribe({
        next: (user) =>  this.userForm.setValue(user),
          error: (err) => { 
            console.error(err);
            this.toastrService.error('A felhasználó adatok betöltése sikertelen');
          }
      });
    }

    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => {
        console.error(err);
        this.toastrService.error('A felhasználók betöltése sikertelen');
      }
    });

  }

    saveUser()
    {
      const user = this.userForm.value as UserDTO;

      if (this.isNewUser)
      {
      this.userService.create(user).subscribe({
        next: (user) => {
          this.toastr.success('Sikeres mentés');
          this.router.navigate(['/user-list']);
        },
        error: (err) => {this.toastr.error('Hiba')}
      });
    }
    else{
      this.userService.update(user).subscribe({
        next: (user) => {this.toastr.success('Sikeres frissítés')},
        error: (err) => {this.toastr.error('Hiba')}
    });
  }
  }

  backToUserList(){
    this.router.navigate(['/user-list']);
  }

  compareObjects(obj1: any, obj2: any)
  {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

  
}