import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  myGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.myGroup = new FormGroup(
      {
        emailId: new FormControl(""),
        password: new FormControl(""),
        cpassword: new FormControl(""),
        address: new FormGroup({
          addressline1: new FormControl(""),
          addressline2: new FormControl(""),
          city: new FormControl(""),
          state: new FormControl(""),
          pincode: new FormControl("")
        })
      },
      { validators: this.customValidation }
    );
    this.myGroup.statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  handleSubmit() {
    console.log(this.myGroup.value);
    this.myGroup.reset();
  }
  customValidation: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get("password");
    const cpassword = control.get("cpassword");
    //console.log(password.value);
    return password.value !== cpassword.value ? { CMatch: true } : null;
  };
  // customValidation=(control: FormControl): { [s: string]: boolean } =>{
  //   console.log(this.myGroup);
  //   // if (this.myGroup.get("password") === control.value) {
  //   //   return { cMatch: true };
  //   // }
  //   return null;
  // }
}
