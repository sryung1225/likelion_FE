class App extends React.Component {

  state = {
    headline: 'React Application',
    isDisabled: false,
    isToggle: false,
    isLoading: false,
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😃';

  handleChangeHeadline = () => {
    let assignHeadlineContent = '';
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
    const { isToggle, headline } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div>
    }
    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button
          // disabled={this.state.isDisabled}
          type="button"
          onClick={this.handleChangeHeadline}
        >
          {isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경'}
        </button>
      </div>
    );
  }
}

export default App;