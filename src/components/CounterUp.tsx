import { useProgressiveCounter } from '@/hooks/useProgressiveCounter'
import { useEffect } from 'preact/hooks'

export const CounterUp = ({
  initial,
  final,
  decimals,
  duration
}: {
  initial: number
  final: number
  decimals?: number
  duration?: number
}) => {
  const [count, setCount] = useProgressiveCounter(initial, duration, decimals)

  useEffect(() => {
    setCount(final)
  }, [])

  return <span>{count}</span>
}
