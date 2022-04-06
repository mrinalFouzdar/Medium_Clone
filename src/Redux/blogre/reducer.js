import {Get_BLOG} from "./action"

export const Blogreducer=(store={bologsData:[]},{type,payload})=>{
    switch(type){
        case Get_BLOG:
            return{
                ...store,
                bologsData:[...payload]
            }

            default:
                return store
    }
}