import React from 'react'

const CounterContext = React.createContext(null)

const CounterContextProvider = (props) => {
  const [value, setState] = React.useState(props.value)
  const minus = () => setState(value - 1)
  const plus = () => setState(value + 1)
  const context = { value, minus, plus }

  return (
    <CounterContext.Provider value={context}>
      {props.children}
    </CounterContext.Provider>
  )
}

// 커스텀 훅
const useCounterContext = () => {
  return React.useContext(CounterContext)
}

const MinusButton = () => {
  // const { minus } = React.useContext(CounterContext)
  const { minus } = useCounterContext()
  return <button onClick={minus}>-</button>
}

const PlusButton = () => {
  const { plus } = useCounterContext()
  return <button onClick={plus}>+</button>
}

const Viewer = () => {
  const { value } = useCounterContext()
  return <span>{value}</span>
}

const Counter = (props) => {
  return (
    <CounterContextProvider value={props.value}>
      <MinusButton />
      <Viewer />
      <PlusButton />
    </CounterContextProvider>
  )
}

const Home = () => {
  return <Counter value={0} />
}

export default Home