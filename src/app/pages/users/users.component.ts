import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { LoadUsers } from 'src/app/store/users/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private _store: Store<AppState>){
    this._store.dispatch(new LoadUsers({}))
  }
}
