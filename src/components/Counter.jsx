import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";


const Counter = () => {
    const {count} = useSelector((state)=> state.counter)
    const disPatch = useDispatch()
    // console.log(count)
    return (
        <div>
            <button onClick={() => disPatch(increment())} className="bg-blue-800 px-4 py-4">Increment</button>
            <h1>{count}</h1>
            <button onClick={() => disPatch(decrement())} className="bg-purple-800 px-4 py-4">Decrement</button>
        </div>
    );
};

export default Counter;