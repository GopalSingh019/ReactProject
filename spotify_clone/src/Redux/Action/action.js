import instance from "../../Axios"

export function getUsers(){
    return async (dispatch)=>{
        try{
        const res=instance.get("/me");
        const data=(await res).data;
        dispatch(setUser(data));
        }catch(err){
            console.log(err);
        }
    }
}

function setUser(data){
    return {
        type:"User",
        payload:data
    }
}

export function setToken(token){
    return {
        type:"token",
        payload:token
    }
}

function setcurrentPlaying(data){
    return {
        type:"currentPlaying",
        payload:data
    }
}

export function currentPlaying(){
    return async (dispatch)=>{
        try{
        const res=instance.get("/me/player/currently-playing");
        const data=(await res).data;
        dispatch(setcurrentPlaying(data));
        }catch(err){
            console.log(err);
        }
    }
}

function setSearch(data){
    return{
        type:"search",
        payload:data
    }
}

export function getSearch(text){
    return async (dispatch)=>{
        try{
        const res=instance.get("/search?q="+text+"&type=track&limit=50&offset=5");
        const data=(await res).data;
        dispatch(setSearch(data));
        }catch(err){
            console.log(err);
        }
    }
}