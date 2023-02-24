import LogIn from './pages/LogIn.js';
import Browse from './pages/Browse.js';

class App extends React.Component {

  state = {
    headline: 'React Application',
    // isDisabled: false,
    isPaid: true,
    isToggle: false,
    isLoading: false,
    hasError: null, // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😃';

  unknown = null;

  handleChangeHeadline = () => {

    // const { hasError: error } = this.state;

    // 1. 문
    // if (error === null || error === undefined) {
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
    // }

    // 2. 터너리
    // (error === null || error === undefined) ?
    //   console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.') :
    //   null;

    // 3. null 병합 연산자
    // error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

    // 옵셔널 체이닝을 사용해 조건 처리해봅니다.
    // error && typeof error.log === 'function' && error.log();

    // let error = {
    //   log() {
    //     console.log('this is logger')
    //   }
    // }

    // error.log?.();

    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline
      });
    }
  }

  render() {
    const { isToggle, isPaid, headline } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div>
    }
    if (this.state.hasError) {
      return <div role="alert">{this.state.hasError.message}</div>
    }
    return (
      <div className="App">
        <h1>{headline}</h1>
        <button
          // disabled={this.state.isDisabled}
          type="button"
          onClick={this.handleChangeHeadline}
        >
          {isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경'}
        </button>
        <LogIn />
        {/* 조건부 렌더링 (화면에 그리지 않음: 민감, 보안, 결제 등 요구) */}
        {isPaid && <Browse />}
      </div>
    );
  }
}

export default App;