import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { DeleteUser, LoadUsers, SelectUser } from 'src/app/store/users/users.actions';
import { selectSelectedUser, selectUsers, selectUsersTotal } from 'src/app/store/users/users.reducer';
import { UserModel } from './users.model';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$: Observable<UserModel[]>;
  total$: Observable<number>;
  selectedUser$: Observable<UserModel>;
  editForm: FormGroup;

  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new LoadUsers({}));
    this.users$ = this._store.pipe(select(selectUsers));
    this.total$ = this._store.pipe(select(selectUsersTotal));
    this.selectedUser$ = this._store.pipe(select(selectSelectedUser))
    this.buildEditForm();
  }

  selectUser(user: UserModel) {
    this._store.dispatch(new SelectUser(user));
  }

  desectUser() {
    this._store.dispatch(new SelectUser(null));
  }

  delete(id: number) {
    this._store.dispatch(new DeleteUser(id));
  }

  editUser(user: UserModel) {
    this.selectUser(user);
    this.editForm.patchValue(user);
  }

  updateUser() {
    console.log(this.editForm.value)
  }

  private buildEditForm() {
    this.editForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required])
    })
  }
}
