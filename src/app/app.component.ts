import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') createUserForm: NgForm;
  subscriptionDefaultValue = 'Advanced';

  user = {
    email: '',
    subscription: '',
    password: ''
  };
  email;
  password;
  subscriptionList: string[] = ['Basic', 'Advanced', 'Pro'];
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.createUserForm);
    this.extractUserValuesIntoObject();
    this.resetTheForm();

  }

  private extractUserValuesIntoObject() {
    this.user.email = this.createUserForm.value.email;
    this.user.subscription = this.createUserForm.value.subscriptionType;
    this.user.password = this.createUserForm.value.password;
  }

  private resetTheForm() {
    this.createUserForm.reset();
    this.createUserForm.form.patchValue({subscriptionType: this.subscriptionDefaultValue});
  }
}
