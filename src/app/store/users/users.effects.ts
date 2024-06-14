import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/pages/users/user.service";
import { DeleteUser, DeleteUserDone, LoadUsers, LoadUsersDone, UpdateUser, UpdateUserDone, UsersActionType } from "./users.actions";
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


    onDelete$ = createEffect(() => this.actions$
        .pipe(
            ofType(UsersActionType.DeleteUser),
            switchMap((actions: DeleteUser) => this._service.delete(actions.payload)
                .pipe(
                    map(() => {
                        return new DeleteUserDone(actions.payload)
                    })
                ))
        ))

    onUpdate$ = createEffect(() => this.actions$
        .pipe(
            ofType(UsersActionType.UpdateUser),
            switchMap((actions: UpdateUser) => this._service.update(actions.payload)
                .pipe(
                    map((res: UserModel) => {
                        return new UpdateUserDone(res)
                    })
                ))
        ))
    constructor(private _service: UserService,
        private actions$: Actions) { }


}