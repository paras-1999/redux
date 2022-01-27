const initialState = {count:0,postdata:[]};
const upDateTheNunber=(state=initialState ,action)=>{
    console.log(state)
    switch(action.type){
        case 'INC':
            return {...state,count:state.count+1}
        case 'DEC':
            return {...state,count:state.count-1}
        // case 'pdata':return{...state,postdata:action.payload}
        case 'GET_POSTS':return{...state}
        case 'POSTS_RECEIVED': return{...state,postdata:action.payload}
        default:
            return state;
    }
}
export default upDateTheNunber;