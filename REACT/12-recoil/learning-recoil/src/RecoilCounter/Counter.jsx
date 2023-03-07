import Count from './Count';
import CountButton from './CountButton';
import classes from './Counter.module.css';

export default function Counter() {

  return (
    <div className={classes.RecoilCounter}>
      <Count />
      <CountButton>리코일 카운트</CountButton>
    </div>
  )
}

Counter.displayName = 'RecoilCounter';