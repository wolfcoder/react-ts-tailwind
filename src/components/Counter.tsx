import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter?.counter);
    const show = useSelector(state => state.counter?.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div className='md:w-[500px] mx-auto text-center mb-8'>
            <h1 className='text-2xl font-semibold'>Counter</h1>
            {/* Show counter */}
            {show && <div className='mb-4 text-VINGold text-xl'>{counter}</div>}

            <div className='flex-col flex md:flex md:flex-row'>
                <button onClick={decrementHandler} className='px-4 py-2 border'>Decrement</button>
                <button onClick={incrementHandler} className='px-4 py-2 border'>Increment</button>
                <button onClick={increaseHandler} className='px-4 py-2 border'>Increase by 5</button>
                <button onClick={() => dispatch(counterActions.toggleCounter())} className='px-4 py-2 border'>Toggle Counter</button>
            </div>


        </div>
    );
}