import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService, CookieService } from 'src/app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})

export class JoinUsComponent implements OnInit {
  submitForm: FormGroup;
  edited = true;
  registered = false;
  private userEmail: string;
  private emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private dataService: DataService,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.userEmail = this.cookieService.get('user_email');
    this.submitForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)])
    });
    if (this.userEmail) {
      this.addSubscription().subscribe(this.successSubscription.bind(this), this.successSubscription.bind(this));
    }
  }

  onSubmit() {
    this.userEmail = this.submitForm.value ? this.submitForm.value.email : '';
    this.addSubscription().subscribe(this.successSubscription.bind(this), this.rejectSubscription.bind(this));
    this.edited = false;
  }

  private addSubscription(): Observable<any> {
    return this.dataService.create('api/subscriptions', { email: this.userEmail });
  }

  private successSubscription(): void {
    this.registered = true;
    this.cookieService.set('user_email', this.userEmail, null, '/');
  }

  private rejectSubscription(): void {
    if (this.userEmail) {
      this.registered = true;
      return;
    }

    this.registered = false;
  }

  isValidEmail() {
    return this.submitForm.get('email').valid || this.submitForm.get('email').untouched;
  }

  unsubscribe() {
    this.cookieService.delete('user_email');
    this.registered = false;
    this.edited = true;

    this.dataService.delete(`api/subscriptions/${this.userEmail}`).subscribe();
  }
}
