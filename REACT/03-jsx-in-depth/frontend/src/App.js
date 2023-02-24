import LogIn from './pages/LogIn.js';
import Browse from './pages/Browse.js';
import Product from './pages/Product.js';

class App extends React.Component {

  state = {
    headline: 'React Application',
    // isDisabled: false,
    isPaid: true,
    isToggle: false,
    isLoading: false,
    hasError: null
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😃';

  unknown = null;

  handleChangeHeadline = () => {

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
    const { isToggle, isPaid, headline, isLoading, hasError } = this.state;

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div>
    }
    if (hasError) {
      return <div role="alert">{hasError.message}</div>
    }
    return (
      <Product />
    )
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
        {isPaid && <Browse />}
      </div>
    );
  }
}

export default App;