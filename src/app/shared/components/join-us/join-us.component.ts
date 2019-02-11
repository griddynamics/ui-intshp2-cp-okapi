import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { CookieService } from 'src/app/core/services/cookie.service';


@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})

export class JoinUsComponent implements OnInit {
  submitForm: FormGroup;
  edited = true;
  registered = false;
  private emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private dataService: DataService,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.submitForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)])
    });
    if (this.checkCookie()) {
      this.registered = true;
    }
  }

  onSubmit() {
    this.dataService.create('', this.submitForm.value).subscribe();
    this.cookieService.set('user_email', this.submitForm.value.email, null, '/');
    this.edited = false;
    this.registered = true;
  }

  isValidEmail() {
    return this.submitForm.get('email').valid || this.submitForm.get('email').untouched;
  }

  checkCookie() {
    return this.cookieService.get('user_email');
  }

  unsubscribe() {
    this.cookieService.delete('user_email');
    this.registered = false;
    this.edited = true;
  }
}
