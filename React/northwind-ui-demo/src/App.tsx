import CustomerTable from './components/CustomerTable'
import { useCustomers } from './hooks/useCustomers'

function App() {
  const state = useCustomers()

  return (
    <main className="container">
      <h1>Northwind Customers</h1>

      {state.status === 'loading' && <p>Loading customers…</p>}
      {state.status === 'error' && (
        <p role="alert">
          Couldn't load customers: {state.error}
        </p>
      )}
      {state.status === 'success' && (
        <>
          <p className="subtle">
            Showing {state.data.length} record{state.data.length === 1 ? '' : 's'}
          </p>
          <CustomerTable customers={state.data} />
        </>
      )}
      {state.status === 'idle' && null}
    </main>
  )
}

export default App
