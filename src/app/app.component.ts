import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.log('hello', this.myform.value);
  }
}
