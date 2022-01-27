export default function postData(){
    return (dispatch)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        dispatch({type:'pdata',payload:data})
    })
}
}