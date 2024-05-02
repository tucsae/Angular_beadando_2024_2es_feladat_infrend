import { Component, OnInit } from '@angular/core';
import { ItemDTO } from 'models';
import { ItemService } from '../services/item.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})


export class ItemListComponent implements OnInit {

  items: ItemDTO[] = [];
  toastrService: any;
  filteredItems: ItemDTO[] = [];
  availableItems: ItemDTO[] = [];
  loanedItems: ItemDTO[] = [];
  searchTerm: string = '';

  constructor(private itemService: ItemService,
    private toastr: ToastrService,
    private router: Router,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.reloadTables();
  }

  navigateToItemForm(id:number) {
    this.router.navigate(['/item-form',id]);
  }

  deleteItem(item: ItemDTO) {
    this.itemService.delete(item.id).subscribe({
      next: () =>
      {
        const index = this.items.indexOf(item);
        if(index > -1) {
          this.items.splice(index, 1);
        }
      },
        error: (err) =>{
          console.error(err);
          this.toastrService.error('Hiba a tárgy törlésekor', 'Hiba');
        }
    });
  }
  
  searchItems() {
    if(this.searchTerm.toLowerCase().trim())
    this.filteredItems = this.items.filter(
      item => item.title.toLowerCase().includes(this.searchTerm) || item.Author.toLowerCase().includes(this.searchTerm)
    ).sort((a, b) => a.title.localeCompare(b.title));
    else
    {
      this.filteredItems = this.items.slice();
    }
  }

  loadAllItems(){
    this.itemService.getAll().subscribe(
      {
        next: (items) => {
          this.items = items
          this.filteredItems = items;
        },
        error: (err) => {this.toastr.error('Hiba')},
      }
    );
  }
  
  loadAvailableItems() {
    this.itemService.getAvailableItems().subscribe(
      (items: ItemDTO[]) => {
        this.availableItems = items;
      },
      (error) => {
        console.log('Error retrieving available items:', error);
      }
    );
  }

  loadLoanedItems() {
    this.itemService.getLoanedItems().subscribe(
      (items: ItemDTO[]) => {
        this.loanedItems = items;
      },
      (error) => {
        console.log('Error retrieving loaned items:', error);
      }
    );
  }

  borrowItem(itemId: number) {
    this.itemService.borrowItem(this.authService.getUserId(), itemId).subscribe(
      () => {
        console.log('Item borrowed successfully');
        this.reloadTables();
      },
      (error) => {
        console.log('Error borrowing item:', error);
      }
    );
  }

  returnItem(itemId: number) {
    this.itemService.returnItem(this.authService.getUserId(), itemId).subscribe(
      () => {
        console.log('Item returned successfully');
        this.reloadTables();
      },
      (error) => {
        console.log('Error returning item:', error);
      }
    );
  }

  reloadTables(){
    this.loadAllItems();
    this.loadAvailableItems();
    this.loadLoanedItems();
  }

}
