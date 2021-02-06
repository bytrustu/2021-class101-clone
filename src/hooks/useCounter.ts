import { useState } from 'react'
import { IUseCounter } from '../types'

const useCounter: IUseCounter = (currentNumber, maxNumber) => {
  const [count, setCount] = useState<number>(currentNumber)
  const countUp = (action: () => any) => {
    if (count < maxNumber) setCount((prev) => prev + 1)
    action && action()
  }
  const countDown = (action: () => any) => {
    if (count > 1) setCount((prev) => prev - 1)
    action && action()
  }
  return { count, countUp, countDown }
}

export default useCounter
