import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemDTO, LateItemDTO } from 'models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ItemDTO[]>('/api/items/');
  }

  getOne(id: number) {
    return this.http.get<ItemDTO>('/api/items/' + id);
  }

  create(item: ItemDTO){
    return this.http.post<ItemDTO>('/api/items', item);
  }

  update(item: ItemDTO) {
    return this.http.put<ItemDTO>('/api/items/', item);
  }

  delete(id: number) {
    return this.http.delete<ItemDTO>('/api/items/' + id);
  }

  getAvailableItems(): Observable<ItemDTO[]> {
    return this.http.get<ItemDTO[]>('/api/items/available');
  }

  getLoanedItems(): Observable<ItemDTO[]> {
    return this.http.get<ItemDTO[]>('/api/items/loaned');
  }

  borrowItem(userId: number, itemId: number): Observable<any> {
    return this.http.post('api/items/borrow', { userId, itemId });
  }

  returnItem(userId: number, itemId: number): Observable<any> {
    return this.http.post('api/items/return', { userId, itemId });
  }

  getLateItems(): Observable<LateItemDTO[]> {
    return this.http.get<LateItemDTO[]>('api/items/late');
  }

}
