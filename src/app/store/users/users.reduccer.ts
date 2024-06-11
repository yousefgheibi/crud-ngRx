import { UserModel } from "src/app/pages/users/users.model";
import { UsersActions, UsersActionType } from "./users.actions";


export interface UsersState {
    users: UserModel[];
    selectedUser: UserModel | null;
    total: number | null;
}



const initUsersState: UsersState = {
    users: [],
    selectedUser: null,
    total: null

}
export function usersReducer(state: UsersState = initUsersState, action: UsersActions): UsersState {
    switch (action.type) {

        case UsersActionType.LoadUsers: return state;

        default: return state;
    }
}