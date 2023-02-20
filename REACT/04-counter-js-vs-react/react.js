class Counter extends React.Component {

  // 개발자의 기본 props
  static defaultProps = {
    min: 0,
    count: 0,
    max: 10,
    step: 1,
  };

  // 업데이트 가능한 상태
  // 최초의 1회만 props → state (파생)
  state = {
    count: this.props.count,
  };

  render() {
    const { min, max } = this.props;
    const { count } = this.state;

    return (
      <div className="counter">
        <button
          disabled={count === max}
          type="button"
          aria-label="카운트 1 증가"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <output aria-live="polite">{count}</output>
        <button
          disabled={count === min}
          type="button"
          aria-label="카운트 1 감소"
          onClick={this.handleDecrement}
        >
          -
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    const { max, step } = this.props;
    let newCountValue = this.state.count + step;
    if (newCountValue > max) {
      newCountValue = max;
    }
    this.setState({
      count: newCountValue,
    });
  };

  handleDecrement = () => {
    const { min, step } = this.props;
    let newCountValue = this.state.count - step;
    if (newCountValue < min) {
      newCountValue = min;
    }
    this.setState({
      count: newCountValue,
    });
  };
}

const counterContainer = document.querySelector('[data-component="Counter"]');
// ReactDOMRoot { render }
const reactDomRoot = ReactDOM.createRoot(counterContainer);
reactDomRoot.render(
  <>
    <Counter />
    {/* 사용자의 props */}
    <Counter min={7} count={9} max={16} step={4} />
  </>
);