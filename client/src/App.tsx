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

      <p style={{ marginTop: 16 }}>
        <a href="/form">Open blank form</a>
      </p>
    </main>
  )
}

type StockFormPageProps = {
  initialTicker?: string
}

function StockFormPage({ initialTicker }: StockFormPageProps) {
  const [ticker, setTicker] = useState(initialTicker ?? '')
  const [name, setName] = useState('')
  const tickerLocked = Boolean(initialTicker)

  return (
    <main style={{ padding: 24 }}>
      <h1>Stock Form</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        style={{ display: 'grid', gap: 12, maxWidth: 360 }}
      >
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Ticker</span>
          <input
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            readOnly={tickerLocked}
            placeholder="e.g. AAPL"
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Stock name"
          />
        </label>
      </form>

      <p style={{ marginTop: 16 }}>
        <a href="/">Back to stock list</a>
      </p>
    </main>
  )
}

function App() {
  const route = useMemo(() => {
    const path = window.location.pathname

    if (path === '/form') {
      return { type: 'form' as const }
    }

    const match = path.match(/^\/form\/([^/]+)$/)
    if (match) {
      return {
        type: 'form' as const,
        ticker: decodeURIComponent(match[1]),
      }
    }

    return { type: 'list' as const }
  }, [])

  if (route.type === 'form') {
    return <StockFormPage initialTicker={route.ticker} />
  }

  return <StockListPage />
}

export default App
