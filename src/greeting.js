import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetingSlice';

function Greeting() {
  const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;
  const greetings = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmptyObject(greetings)) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, greetings]);
  return (
    <div>
      Here is a nice Random Greeting:
      {greetings.greeting}
    </div>
  );
}

export default Greeting;
