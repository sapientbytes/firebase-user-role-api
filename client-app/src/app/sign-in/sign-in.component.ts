import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormGroup, FormControl} from '@angular/forms';
import {Subscription} from "rxjs";
import {SapientUserService} from "../users/services/sapient.user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  firebaseUserSubs: Subscription;
  currentUser: firebase.User;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
              private sapientUserService: SapientUserService,
              public modal: NgbActiveModal,
              private afAuth: AngularFireAuth) {
  }

  async signIn() {
    try {
      const {email, password} = this.form.value
      console.log(email);

      this.firebaseUserSubs = this.afAuth.user.subscribe(val => {

        if (val) {

          this.currentUser = val;

          console.log(`RECEIVED FIREBASE USER:  ${this.currentUser.toJSON()}`);

          this.sapientUserService.user$(this.currentUser.uid).subscribe( resp => {


            console.log('RECEIVED RESPONSE FROM SAPIENTUSERS ');
            console.log(resp);

          });

          this.firebaseUserSubs.unsubscribe();
        }

      });

      await this.afAuth.auth.signInWithEmailAndPassword(email, password);


      this.modal.close()
    } catch (err) {
      console.log(err)
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  dismiss() {
    this.modal.dismiss()
  }

}
