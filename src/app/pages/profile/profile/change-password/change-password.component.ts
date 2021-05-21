import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { ChangePasswordService } from './change-password.service';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: any;
  newPassword: any = {};

  showOldPassword = false;
  showNewPassword = false;
  showNewConfirmPassword = false;

  constructor( private changePasswordService: ChangePasswordService,  private toastrService: NbToastrService) { }

  getTypeInputOldPassword = () => (this.showOldPassword) ? 'text' : 'password';
  getTypeInputNewPassword = () => (this.showNewPassword) ? 'text' : 'password';
  getTypeInputRepeatPassword = () => (this.showNewConfirmPassword) ? 'text' : 'password';

  toggleShowOldPassword = () => {
    this.showOldPassword = !this.showOldPassword;
  }

  toggleShowNewPassword = () => {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleShowNewConfirmPassword = () => {
    this.showNewConfirmPassword = !this.showNewConfirmPassword;
  }

  private showToast(body: string) {
    const config = {
      status: 'danger',
      destroyByClick: true,
      duration: 2000,
      hasIcon: false,
      position: 'top-right',
      preventDuplicates: false,
    };

    // @ts-ignore
    this.toastrService.show(body, 'Failed to change password', config);
  }


  submitPassword = () => {
    this.changePasswordService.changePassword({
      oldPassword: this.inputOldPassword.value,
      password: this.inputNewPassword.value,
      confirmPassword: this.inputRepeatNewPassword.value,
    })
      .subscribe(
        data => {},
        error => {
          error.error.error.errors.forEach(err => this.showToast(err));
        },
      );
  }

  ngOnInit(): void {
    this.passwordForm = new FormGroup({
      inputOldPassword: new FormControl(this.newPassword.inputOldPassword, [
        Validators.required,
      ]),
      inputNewPassword: new FormControl(this.newPassword.inputNewPassword, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
      ]),
      inputRepeatNewPassword: new FormControl(this.newPassword.inputRepeatNewPassword, [
        Validators.required,
        this.samePassword(),
      ]),
    });
  }

  samePassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (this.passwordForm != null) {
        if (control.value === this.passwordForm.value.inputNewPassword) {
          return null;
        }
      }
      return {'confirmPasswordIncorrect': {value: control.value}};
    };
  }

  get inputOldPassword() { return this.passwordForm.get('inputOldPassword'); }
  get inputNewPassword() { return this.passwordForm.get('inputNewPassword'); }
  get inputRepeatNewPassword() { return this.passwordForm.get('inputRepeatNewPassword'); }

}
