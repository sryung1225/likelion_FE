import { useState } from 'react';
import Count from './Count';
import CountButton from './CountButton';
import classes from './Counter.module.css';

export default function Counter() {

  const [count, setCount] = useState(0);
  return (
    <div className={classes.ReactCounter}>
      <Count>{count}</Count>
      <CountButton
        onClick={() => setCount((count) => count + 1)}
      >
        리액트 카운트
      </CountButton>
    </div>
  )
}

Counter.displayName = 'ReactCounter';