import type { Customer } from '../types'

type Props = {
  customers: Customer[]
}

export default function CustomerTable({ customers }: Props) {
  if (!customers.length) {
    return (
      <div className="empty">
        No customers found.
      </div>
    )
  }

  return (
    <div className="table-wrap">
      <table className="nw-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Company</th>
            <th>Contact</th>
            <th>City</th>
            <th>Country</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.customerId}>
              <td><code>{c.customerId}</code></td>
              <td>{c.companyName}</td>
              <td>{c.contactName ?? '—'}</td>
              <td>{c.city ?? '—'}</td>
              <td>{c.country ?? '—'}</td>
              <td>{c.phone ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
