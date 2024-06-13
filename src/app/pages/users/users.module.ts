import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/app/store';
import { UsersEffects } from 'src/app/store/users/users.effects';



const routes: Routes = [
  { path: '', component: UsersComponent}
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([UsersEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
