

const initialState={
token:undefined,
Search:undefined,
user:undefined
};

export default function reducer(initialState,action){
    switch(action.type){
        case "User":return {...initialState,user:action.payload}
        case "Search":return {...initialState,Search:action.payload}
        case "token":return {...initialState,token:action.payload}
        case "currentPlaying":return {...initialState,currentPlaying:action.payload}
        case "search":return {...initialState,search:action.payload}
        default : return initialState;
    };
}