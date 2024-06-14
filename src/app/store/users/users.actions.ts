import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { UserModel } from "src/app/pages/users/users.model";

export enum UsersActionType  {
    LoadUsers = '[USERS] load users.',
    LoadUsersDone = '[USERS] load users done.',
    LoadUsersFailed = '[USERS] load users failed.',
    
    SelectUser = '[USERS] select user.',

    DeleteUser = '[USERS] delete user.',
    DeleteUserDone = '[USERS] delete user done.',

    UpdateUser = '[USERS] update user.',
    UpdateUserDone = '[USER] update user done.'
}


export class LoadUsers implements Action {
    readonly type: string = UsersActionType.LoadUsers;
    constructor(public payload: any){ }
}


export class LoadUsersDone implements Action {
    readonly type: string = UsersActionType.LoadUsersDone;
    constructor(public payload: UserModel[]){ }
}


export class LoadUsersFailed implements Action {
    readonly type: string = UsersActionType.LoadUsersFailed;
    constructor(public payload: HttpErrorResponse){ }
}

export class SelectUser implements Action {
    readonly type: string = UsersActionType.SelectUser; 
    constructor(public payload : UserModel){ }
}

export class DeleteUser implements Action {
    readonly type: string = UsersActionType.DeleteUser; 
    constructor(public payload : number){ }
}

export class DeleteUserDone implements Action {
    readonly type: string = UsersActionType.DeleteUserDone; 
    constructor(public payload : number){ }
}

export class UpdateUser implements Action {
    readonly type: string = UsersActionType.UpdateUser; 
    constructor(public payload : UserModel){ }
}

export class UpdateUserDone implements Action {
    readonly type: string = UsersActionType.UpdateUserDone; 
    constructor(public payload : UserModel){ }
}

export type UsersActions = 
    | LoadUsers
    | SelectUser
    | LoadUsersDone
    | LoadUsersFailed
    | DeleteUser
    | DeleteUserDone
    | UpdateUser
    | UpdateUserDone