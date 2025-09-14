import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>BookNow</h1>
          <p>Sign in to your account</p>
        </div>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              placeholder="Enter your email"
              [class.error]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched"
            />
            <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" class="error-message">
              Please enter a valid email address
            </div>
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              placeholder="Enter your password"
              [class.error]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
            />
            <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="error-message">
              Password is required
            </div>
          </div>
          
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" formControlName="rememberMe">
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" [disabled]="loginForm.invalid || isLoading()" class="login-button">
            <span *ngIf="!isLoading()">Sign In</span>
            <span *ngIf="isLoading()">Signing In...</span>
          </button>
        </form>
        
        <div class="signup-link">
          <p>Don't have an account? <a routerLink="/register">Sign up here</a></p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.Component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      
      // Simulate API call
      setTimeout(() => {
        this.isLoading.set(false);
        // For demo purposes, redirect to home page
        this.router.navigate(['/home']);
      }, 1500);
    }
  }
}
