import { Component, Inject, OnDestroy, ViewEncapsulation, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, Subject, combineLatest, combineLatestAll, delay, switchMap, takeUntil, tap } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { IconsModule } from '../icons/icons.module';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnDestroy {
  sideBarService = inject(SidebarService)
  authService = inject(AuthService);
  toastrService = inject(ToastrService)
  router = inject(Router)

  sideBarState!: boolean;
  sidebarTransitionEnd!: boolean;
  sidebarVisible!: boolean;
  destroy$: Subject<void> = new Subject();

  constructor(){
    this.sideBarService.menuVisible.pipe(
      takeUntil(this.destroy$)
    ).subscribe(visibility => this.sidebarVisible = visibility);
    this.sideBarService.menuState.pipe(
      takeUntil(this.destroy$),
      tap(state => {
        this.sidebarTransitionEnd = false;
        this.sideBarState = state;
      }),
      switchMap(() => this.sideBarService.menuTransitionCompleted.pipe(
        tap(() => this.sidebarTransitionEnd = true)
      ))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  menuButtonClicked() {
    this.sideBarService.setSideBarState(!this.sideBarService.getSideBarState())
  }

  logout() {
    this.authService.removeToken();
    this.router.navigateByUrl('/');
    this.toastrService.success('Sikeresen kijelentkezett.', 'Kilépés');
  }
}