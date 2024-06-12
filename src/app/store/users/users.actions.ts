import { Action } from "@ngrx/store";
import { UserModel } from "src/app/pages/users/users.model";

export enum UsersActionType  {
    LoadUsers = '[USERS] load users.',
    LoadUsersDone = '[USERS] load users done.',
    LoadUsersFailed = '[USERS] load users failed.',

    SelectUser = '[USERS] select user.',
}


export class LoadUsers implements Action {
    readonly type: string = UsersActionType.LoadUsers;
    constructor(public payload: any){ }
}

export class SelectUser implements Action {
    readonly type: string = UsersActionType.SelectUser; 
    constructor(public payload : UserModel){ }
}

export type UsersActions = 
    | LoadUsers
    | SelectUser