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
  private emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private dataService: DataService,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.submitForm = new FormGroup({
      'user_email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)])
    });
  }

  onSubmit() {
    this.dataService.create('', this.submitForm.value).subscribe();
    this.edited = false;
    this.cookieService.set('user_email', this.submitForm.value.user_email);
  }

  invalidEmail() {
    return !this.submitForm.get('user_email').valid && this.submitForm.get('user_email').touched;
  }

  checkLocal() {
    return this.cookieService.get('user_email');
  }

  unsubscribe() {
    this.cookieService.delete('user_email');
    this.edited = true;
  }
}
