class App extends React.Component {
  // 2022 6. 표준 기술 : public, private 클래스 필드, 피처

  state = {
    headline: 'React Application'
  };

  // 클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다
  // 함수는? 못한다 => React Hooks 사용 (useRef)
  // 메모이제이션 패턴
  originalHeadline = this.state.headline;

  handleChangeHeadline = () => {
    this.setState({
      headline: 'NEW HEADLINE! 😃'
    });
  }

  render() {
    console.log(this);
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;