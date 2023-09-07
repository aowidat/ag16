import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router, private snack: MatSnackBar){}

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
    this.snack.open('User logged out', 'close')._dismissAfter(3000);
  }
}
