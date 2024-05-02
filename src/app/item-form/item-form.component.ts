import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { ItemDTO, UserDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  isNewitem = true;

  users: UserDTO[] = [];

  itemForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    Author: this.formBuilder.control(''),
    status: this.formBuilder.control('available'),
    category: this.formBuilder.control(''),
    date: this.formBuilder.control(new Date().toISOString().split('T')[0])
  });
  
  toastrService: any;

  constructor(private formBuilder: FormBuilder,
    private itemService: ItemService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id)
    {
      this.isNewitem = false;

      this.itemService.getOne(id).subscribe({
        next: (item) =>  this.itemForm.setValue(item),
          error: (err) => { 
            console.error(err);
            this.toastrService.error('A tárgy adatok betöltése sikertelen');
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

  saveitem()
  {
    const item = this.itemForm.value as ItemDTO;
    if (this.isNewitem) {
    this.itemService.create(item).subscribe({
      next: () => {
        this.toastr.success('Sikeres mentés');
        this.router.navigate(['/item-list']);
      },
      error: (err) => {this.toastr.error('Hiba')}
    });
    }
    else{
      this.itemService.update(item).subscribe({
        next: () => {this.toastr.success('Sikeres frissítés')},
        error: () => {this.toastr.error('Hiba')}
    });
    }
  }

  backToItemList(){
    this.router.navigate(['/item-list']);
  }

  compareObjects(obj1: any, obj2: any)
  {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

}


