import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { LateItemDTO } from 'models';

@Component({
  selector: 'app-late-items',
  templateUrl: './late-items.component.html',
  styleUrls: ['./late-items.component.css']
})
export class LateItemsComponent implements OnInit {
  
  lateItems: LateItemDTO[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getLateItems().subscribe((lateItems) => {
      this.lateItems = lateItems;
    });
  }
}
