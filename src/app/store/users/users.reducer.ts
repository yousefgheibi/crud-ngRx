import { UserModel } from "src/app/pages/users/users.model";
import { UsersActions, UsersActionType } from "./users.actions";
import { AppState } from "..";
import { createSelector } from "@ngrx/store";


export interface UsersState {
    users: UserModel[];
    selectedUser: UserModel | null;
    total: number | null;
    recently: {
        updated: number | null,
        deleted: number | null
    }
}



const initUsersState: UsersState = {
    users: [],
    selectedUser: null,
    total: null,
    recently: {
        updated: null,
        deleted: null
    }

}
export function usersReducer(state: UsersState = initUsersState, action: UsersActions): UsersState {
    switch (action.type) {

        case UsersActionType.LoadUsers:
            return state;

        case UsersActionType.SelectUser:
            return {
                ...state,
                selectedUser: action.payload
            }

        case UsersActionType.LoadUsersDone:
            return {
                ...state,
                users: action.payload,
                total: action.payload.length
            }

        case UsersActionType.DeleteUser:
            return state;

        case UsersActionType.DeleteUserDone:
            const index: number = state.users.findIndex(user => user.id === action.payload);
            return {
                ...state,
                users: [
                    ...state.users.slice(0, index),
                    ...state.users.slice(index + 1)
                ],
                total: state.total - 1,
                recently: {
                    ...state.recently,
                    deleted: action.payload
                }
            }

        case UsersActionType.UpdateUser:
            return state;
        case UsersActionType.UpdateUserDone:
            const updatedIndex: number = state.users.findIndex(user => user.id === action.payload);
            return {
                ...state,
                users: [
                    ...state.users.slice(0, updatedIndex),
                    action.payload,//backend responce
                    ...state.users.slice(updatedIndex + 1)
                ],
                recently: {
                    ...state.recently,
                    updated: action.payload
                }
            }
        default:
            return state;
    }
}

export const selectUsersState = (app: AppState) => app.users;
export const selectUsers = createSelector(selectUsersState, state => state.users);
export const selectUsersTotal = createSelector(selectUsersState, state => state.total);
export const selectSelectedUser = createSelector(selectUsersState, state => state.selectedUser)