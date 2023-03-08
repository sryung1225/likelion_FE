export type CityLocation = 
 | '서울'
 | 'seoul'
 | '원주'
 | 'wonju'
 | '대전'
 | 'daejeun'
 | '제주'
 | 'jeju'

export const fetchWeather = async (location: CityLocation) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  switch(location.toLowerCase()) {
    case '서울':
    case 'seoul':
      return 24;
    case '원주':
    case 'wonju':
      return 21;
    case '대전':
    case 'daejeun':
      return 25;
    case '제주':
    case 'jeju':
      return 31;
    default:
      return '도시 날씨 정보를 찾을 수 없습니다.';
  }
}