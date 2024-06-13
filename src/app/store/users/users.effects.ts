import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/pages/users/user.service";
import { LoadUsers, LoadUsersDone, UsersActionType } from "./users.actions";
import { map, switchMap } from "rxjs";
import { UserModel } from "src/app/pages/users/users.model";


@Injectable({
    providedIn: 'root'
})
export class UsersEffects {

    onLoadUsers$ = createEffect(() => this.actions$
        .pipe(
            ofType(UsersActionType.LoadUsers),
            switchMap((actions: LoadUsers) => this._service.load()
                .pipe(
                    map((res: UserModel[]) => {
                        return new LoadUsersDone(res)
                    })
                ))
        ))
    constructor(private _service: UserService,
        private actions$: Actions) { }


}