import { Component } from "react";

class Counter extends Component {
  // props 기본 값 설정
  // static defaultProps = {
  //   count: 1,
  //   min: 1,
  //   max: 10,
  //   step: 1,
  // };

  // 최초 1회, props 중 count 값을 sate로 전달
  // 업데이트가 계속해서 가능
  state = {
    count: this.props.count,
  };

  render() {
    const { count } = this.state;
    return (
      <div data-compoent="Counter">
        <button type="button" onClick={this.handleInc} aria-label="카운트 1 증가">+</button>
        <output>{count}</output>
        <button type="button" onClick={this.handleDec} aria-label="카운트 1 감소">-</button>
      </div>
    )
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };
  handleDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

// static
Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
};

// Counter.defaultProps
// 클래스.속성(또는 메서드)

// Counter.prototype.render
// 인스턴스 메서드
// new 클래스().render()

export default Counter;