import { api } from "../viewModel/userSession";

import { ref } from 'vue'
import { type User, type Workout, getUsers } from "@/model/users";
import {refSession} from "@/viewModel/userSession";

export const users = ref([] as User[])
let session = refSession();

getUsers()
    .then((data) => {
    if(data){
        users.value = data
    }
    })

export async function deleteUser(uid : number){
    if(session.user){
        if(session.user.id != uid){
            const index = users.value.findIndex(item => item.id == uid);
            if (index >= 0) {
                const deleted = users.value.splice(index, 1);}
            await api<Workout>("api/v1/users/" + uid, null, 'DELETE')
        } else{
            console.log("Cannot delete own account");
        }
    }
}

export const refUsers = () => users;