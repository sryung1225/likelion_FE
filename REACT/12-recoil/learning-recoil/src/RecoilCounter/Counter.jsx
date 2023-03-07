import Count from './Count';
import CountButton from './CountButton';
import classes from './Counter.module.css';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { countState } from '@/@store/countState';

export default function Counter() {
  // 읽기(GET)/쓰기(SET) useRecoilState
  // 읽기(GET)           useRecoilValue
  // 쓰기(SET)           useSetRecoilState

  const count = useRecoilValue(countState); // 읽기(GET)
  const setCount = useSetRecoilState(countState); // 쓰기(SET)

  return (
    <div className={classes.RecoilCounter}>
      <Count>{count}</Count>
      <CountButton
        onClick={() => setCount((count) => count + 1)}
      >
        리코일 카운트
      </CountButton>
    </div>
  )
}

Counter.displayName = 'RecoilCounter';