import './App.css';
import debounce from 'lodash.debounce';
import { atom, selector, useRecoilState } from 'recoil';
import { CityLocation, fetchWeather } from './WeatherAPI';
import Weather from './Weather';
import { Suspense } from 'react';

const cityState = atom<CityLocation>({
  key: 'cityState',
  default: '원주',
});

export const weatherState = selector({
  key: 'weatherState',
  get: async ({ get }) => {
    const city = get(cityState);
    return await fetchWeather(city);
  },
});

function App() {
  const [city, setCity] = useRecoilState(cityState);

  const handleChangeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity((e.target as HTMLInputElement).value as CityLocation);
  };

  return (
    <div className="App">
      <h2>API 데이터 쿼리(비동기 호출)</h2>
      <div style={inputContainerStyle}>
        <label htmlFor="">도시 이름 입력</label>{' '}
        <input
          type="text"
          defaultValue={city}
          onChange={debounce(handleChangeCityName, 400)}
        />
      </div>
      <Suspense fallback={<div role="alert" style={loadingStyle}>날씨 정보를 로딩 중...</div>}>
        <Weather />
      </Suspense>
    </div>
  );
}

export default App;

const inputContainerStyle = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
};

const loadingStyle = {
  marginTop: 20,
  fontSize: 12,
};
