import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(12),
    ]),
  });
  hide = true;
  isLogging = false;

  constructor(private auth: AuthService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  submit() {
    if (this.form.valid) {
      this.auth.isUserLoggedInChange.subscribe({
        next: (data) => {
          if (data) {
            this.snackbar.open("User is Loggedin", "close")._dismissAfter(3000);
            this.router.navigate(['/home']);
            this.isLogging = false;
          }
        },
        error: (error) => {
          this.snackbar.open("Error", "close");
          this.isLogging = false;
        }
      });
      this.isLogging = true;
      this.auth.login()
    }
  }
  myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  invaildForm = () => {
    return this.form.invalid;
  }
}

