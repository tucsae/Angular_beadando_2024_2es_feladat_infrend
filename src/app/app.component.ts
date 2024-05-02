import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subject, takeUntil } from 'rxjs';
import { SidebarComponent } from "./modules/sidebar/sidebar.component";
import { SidebarService } from './modules/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beadandó - Tucsa Eszter Boglárka';
  sidebarVisible!: boolean;

  destroy$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    public sideBarService: SidebarService,
    private deviceService: DeviceDetectorService) {
      this.sideBarService.menuVisible.pipe(
        takeUntil(this.destroy$)
      ).subscribe(visibility => this.sidebarVisible = visibility);
      if (this.deviceService.isMobile()) {
        this.sideBarService.setSideBarState(false);
        setTimeout(() => {
          this.sideBarService.menuTransitionNext(true);
          return;
        });
      }
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

}
