import { useEffect, useState } from 'react'
import './App.css'
import { getStocks } from './api/stocks'
import type { Stock } from './types/stock'

function App() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
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
  }, [])

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
              </tr>
              </thead>
              <tbody>
              {stocks.map((s) => (
                  <tr key={s.id}>
                    <td>{s.ticker}</td>
                    <td>{s.name}</td>
                    <td>{s.exchangeMarket}</td>
                  </tr>
              ))}
              </tbody>
            </table>
        )}
      </main>
  )
}

export default App