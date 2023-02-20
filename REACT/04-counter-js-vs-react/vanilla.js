// 클래스 문법을 사용해 컴포넌트를 설계합니다.
class Counter {

  // 초기화
  // #(hash)를 붙여 private 비공개 상태로 지정. 외부에서 다른 개발자가 접근하는 것을 막음
  #component = null;
  #options = null;

  // 컴포넌트의 상태
  #count = 0; // number

  #incrementButton = null;
  #decrementButton = null;
  #output = null;

  #initCount;


  // (개발자가 설정한) 기본 옵션
  // 정적인(static) 메서드
  // 인스턴스 생성과정(new 클래스())없이 언제든지 외부에서 접근/조작할 수 있게 함
  static defaultOptions = {
    count: 0,
    min: 0,
    max: 10,
    step: 1,
  };

  // constructor : 클래스가 시작될 때 이 함수가 실행됨
  // 클래스 외부에서 전달받아야 할 것들을 받아 내부에서 설정
  // - 어떤 문서의 요소를 카운터 컴포넌트로 만들까?
  // - Counter 컴포넌트의 초기값, 최소값, 변경값
  constructor(element, userOptions = {}) {
    // 클래스의 내부에서 사용될 지역 변수
    // 클래스로부터 생성된 인스턴스(this)의 멤버로 설정
    // this.count
    this.#component = element;

    // 개발자의 옵션과 사용자의 옵션을 병합 (merge. combine)
    // 전개구문(spread syntax) 사용
    this.#options = { ...Counter.defaultOptions, ...userOptions };

    // React 컴포넌트의 props
    // { min, max, step }
    // 읽기만 가능
    // console.log(this.#options);

    // React 컴포넌트의 state
    // { count }
    // 읽기 쓰기가 가능
    this.#initCount = this.#options.count;

    this.reset();
    this.#init(); // 컴포넌트 초기화
    this.#render(); // 컴포넌트 렌더링
    // this를 통해 클래스로부터 생성된 인스턴스의 메서드 사용 가능
  }

  // 클래스 필드에 정의된 함수는 클래스로부터 생성된 인스턴스의 메서드(포함 함수)
  #init() {
    // console.log('초기화');

    // 뷰(View)의 요소 접근/참조
    // 인스턴스 비공개 멤버(변수)
    this.#output = this.#component.querySelector('output');
    this.#incrementButton = this.#component.firstElementChild;
    this.#decrementButton = this.#component.lastElementChild;

    // 이벤트 핸들링
    // React 이벤트 위임
    this.#component.addEventListener('click', (e) => {
      const { target } = e;
      if (target.matches('button:first-child')) {
        this.increment();
        this.#render();
      }
      if (target.matches('button:last-child')) {
        this.decrement();
        this.#render();
      }

    });
  }

  #render() {
    // console.log('렌더링');

    this.#renderIncrementButton();
    this.#renderDecrementButton();
    this.#output.value = this.count;
  }

  #renderIncrementButton() {
    let { max } = this.#options;
    if (this.#count === max) {
      this.#incrementButton.disabled = true;
      this.#output.setAttribute('aria-label', `${max} 최대 카운트 값입니다.`);
    } else {
      this.#incrementButton.disabled = false;
      this.#output.removeAttribute('aria-label');
    }
  }

  #renderDecrementButton() {
    let { min } = this.#options;
    if (this.#count === min) {
      this.#decrementButton.disabled = true;
      this.#output.setAttribute('aria-label', `${min} 최소 카운트 값입니다.`);
    } else {
      this.#decrementButton.disabled = false;
      this.#output.removeAttribute('aria-label');
    }
  }

  // getter 함수 : 읽기 전용 속성 반환
  get count() {
    return this.#count;
  }
  // setter 함수 : 읽기 쓰기 모두 가능
  // set count(newCountValue) {
  //   this.#count = newCountValue;
  // }

  increment() {
    let { max, step } = this.#options;
    if (this.count + step >= max) {
      this.setCount(max);
      return;
    }
    this.#count += step;
  }

  decrement() {
    let { min, step } = this.#options;
    if (this.count - step <= min) {
      this.setCount(min);
      return;
    }
    this.#count -= step;
  }

  // 비공개인 this.#count를 업데이트 할 수 있는 인스턴스 메서드
  // React 클래스 컴포넌트의 this.setState()

  // 1. static method
  // 2. instance method
  setCount(value) {
    this.#count = value;
  }

  reset() {
    this.#count = this.#initCount;
  }
}

// ---------------------------------------------------------------------

// instance (object)
// new 클래스() → 인스턴스(instance 또는 object) 생성
// 개발자는 API(input, output)를 고민해야 함 = 클래스를 어떻게 사용할지를 설계(design)해야 함
new Counter(document.querySelector('.counter1'));
new Counter(
  document.querySelector('.counter2'), // constructor의 element
  {
    min: 7,
    count: 9,
    max: 16,
    step: 4
  } // constructor의 userOptions : 사용자 정의 옵션
);

// 외부에서 다른 개발자에 의해 접근되는 것을 윈하지 않음
// 비공개 (private)
// counter.#init(); // ? Uncaught SyntaxError: Private field '#init' must be declared in an enclosing class
// console.log(counter.#component)

// defautlOptions 와 render 둘 다 똑같이 클래스 필드에 쓴 놈들인데
// 스태틱 멤버 (static)
// - 생성 과정이 없어도 클래스를 통해 바로 접근할 수 있는 변수 또는 함수
// - console.log(Counter.defaultOptions);
// 인스턴스 멤버 (instace)
// - 새로운 인스턴스를 new로 생성해주는, 생성 과정이 있어야지만 접근할 수 있는 변수 또는 함수
// - console.log(new Counter().render());

// 필요하다면 사용자가 모든 Counter 컴포넌트에 설정될 기본 옵션을 변경 가능
// Counter.defaultOptions = {
//   min: 0,
//   count: 1,
//   max: 1000,
//   step: 2
// };