import { useEffect, useState } from 'react'
import type { Customer } from '../types'

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Customer[] }

export function useCustomers() {
  const [state, setState] = useState<State>({ status: 'idle' })

  useEffect(() => {
    const ac = new AbortController()
    const run = async () => {
      try {
        setState({ status: 'loading' })
        const res = await fetch('/api/customers', { signal: ac.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as Customer[]
        setState({ status: 'success', data })
      } catch (err: any) {
        if (err?.name === 'AbortError') return
        setState({ status: 'error', error: err?.message ?? 'Unknown error' })
      }
    }
    run()
    return () => ac.abort()
  }, [])

  return state
}
