import { useRecoilValue } from 'recoil';
import { weatherState } from './App';

export default function Weather() {
  const currentWeather = useRecoilValue(weatherState);
  return (
    <p style={infoStyle}>
      🌡️{' '}
      {typeof currentWeather === 'number'
        ? `${currentWeather}°`
        : currentWeather}
    </p>
  );
}

const infoStyle = { fontWeight: 800, fontSize: 14, color: '#d90000' };
