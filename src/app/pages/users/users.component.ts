import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { LoadUsers, SelectUser } from 'src/app/store/users/users.actions';
import { selectSelectedUser, selectUsers, selectUsersTotal } from 'src/app/store/users/users.reducer';
import { UserModel } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$: Observable<UserModel[]>;
  total$: Observable<number>;
  selectedUser$: Observable<UserModel>;

  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new LoadUsers({}));
    this.users$ = this._store.pipe(select(selectUsers));
    this.total$ = this._store.pipe(select(selectUsersTotal));
    this.selectedUser$ = this._store.pipe(select(selectSelectedUser))
  }


  selectUser(user: UserModel) {
    this._store.dispatch(new SelectUser(user));
  }

  desectUser() {
    this._store.dispatch(new SelectUser(null));
  }
}
