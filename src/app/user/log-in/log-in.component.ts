
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  , FormBuilder  } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
 
  saveClicked:boolean=false;
  login!:FormGroup;
constructor( private formBuil: FormBuilder, private router: Router,  private userService: UserService ) { }

ngOnInit(): void {
   this.login = this.formBuil.group({
       username: [null, [Validators.required]],
       password:  [null, [Validators.required]],
   }, {
   updateOn: 'blur'
     });
 }
 onSubmitForm() {
     this.userService.signIn(this.login.value).subscribe(); 
     this.router.navigateByUrl('/products');
 }
}