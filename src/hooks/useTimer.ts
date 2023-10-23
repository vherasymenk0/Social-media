import { useEffect, useRef, useState } from 'react'

const TIMER_VALUE_KEY = 'timer_value'
const TIMER_STARTED_KEY = 'timer_started'

const useTimer = ({ initValue }: { initValue: number }) => {
  const storageInitValue = localStorage.getItem(TIMER_VALUE_KEY)
  const storageTimerStarted = localStorage.getItem(TIMER_STARTED_KEY)

  const [state, setState] = useState({
    value: storageInitValue ? parseInt(storageInitValue, 10) : initValue,
    timerStarted: storageTimerStarted === 'true',
  })
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (state.timerStarted && state.value > 0) {
      timeoutRef.current = window.setTimeout(() => {
        setState((prev) => ({ ...prev, value: prev.value - 1 }))
      }, 1000)

      localStorage.setItem(TIMER_VALUE_KEY, state.value.toString())
      localStorage.setItem(TIMER_STARTED_KEY, state.timerStarted.toString())
    } else if (state.timerStarted && state.value <= 0) {
      setState({ value: initValue, timerStarted: false })

      localStorage.removeItem(TIMER_VALUE_KEY)
      localStorage.removeItem(TIMER_STARTED_KEY)
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [state, initValue])

  const toggleTimer = () => {
    if (!state.timerStarted && state.value === initValue) {
      setState((prev) => ({ timerStarted: true, value: prev.value - 1 }))
    } else {
      setState((prev) => ({ ...prev, timerStarted: !prev.timerStarted }))
    }
  }

  return {
    timerStarted: state.timerStarted,
    counter: state.value,
    toggleTimer,
  }
}

export default useTimer
