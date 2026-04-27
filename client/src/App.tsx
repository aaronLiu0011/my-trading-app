import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { getStocks } from './api/stocks'
import type { Stock } from './types/stock'
import Form from './Form'

function StockListPage() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const path = window.location.pathname

  useEffect(() => {
    if (path === '/form' || /^\/form\/[^/]+$/.test(path)) {
      setLoading(false)
      return
    }

    async function load() {
      try {
        setLoading(true)
        const data = await getStocks()
        setStocks(data)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [path])

  if (path === '/form') {
    return <Form />
  }

  const formPathMatch = path.match(/^\/form\/([^/]+)$/)
  if (formPathMatch) {
    return <Form ticker={decodeURIComponent(formPathMatch[1])} />
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Trading App - Stock List</h1>

      {loading && <p>Loading stocks...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && stocks.length === 0 && <p>No stocks found.</p>}

      {!loading && !error && stocks.length > 0 && (
        <table cellPadding={8}>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Market</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((s) => (
              <tr key={s.id}>
                <td>{s.ticker}</td>
                <td>{s.name}</td>
                <td>{s.exchangeMarket}</td>
                <td>
                  <a href={`/form/${encodeURIComponent(s.ticker)}`}>Go to form</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

function App() {
  const path = window.location.pathname

  if (path === '/form') {
    return <Form />
  }

  const formPathMatch = path.match(/^\/form\/([^/]+)$/)
  if (formPathMatch) {
    return <Form ticker={decodeURIComponent(formPathMatch[1])} />
  }

  return <StockListPage />
}

export default App
