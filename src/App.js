import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from './actions/index'
function App() {
  const myState= useSelector((state)=>state.upDateTheNunber.count);
  const postdata= useSelector((state)=> state.upDateTheNunber.postdata);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={()=>dispatch(incNumber())}>+</button>
      <input type="text" value={myState} />
      <button onClick={()=>dispatch(decNumber())}>-</button><br/>
      <button onClick={()=>dispatch({type:'POSTS_RECEIVED'})}>post data</button>
      {postdata.length>0&&
      postdata.map(post=>
      <p>{post.title}</p>)}
    </div>
  );
}

export default App;
