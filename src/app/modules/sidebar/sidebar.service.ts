import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _menuState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  menuState: Observable<boolean> = this._menuState.asObservable();

  private _menuVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  menuVisible: Observable<boolean> = this._menuVisible.asObservable();

  private _menuTransitionCompleted: Subject<boolean>  = new Subject<boolean>();
  menuTransitionCompleted: Observable<boolean> = this._menuTransitionCompleted.asObservable();

  /**
  * true = open
  * 
  * false = close
  */
  setSideBarState(menuState: boolean) {
    this._menuState.next(menuState);
  }

  /**
  * true = visible
  * 
  * false = only hamburger visible
  */
  setSideBarVisibility(menuVisible: boolean) {
    this._menuVisible.next(menuVisible);
  }

  getSideBarState():boolean{
    return this._menuState.value;
  }

  getSideBarVisibility():boolean{
    return this._menuVisible.value;
  }

  menuTransitionNext(value: boolean = !this._menuState.value){
    this._menuTransitionCompleted.next(value);
  }
}