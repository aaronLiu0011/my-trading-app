import { useState } from 'react'

type FormProps = {
  ticker?: string
}

function Form({ ticker }: FormProps) {
  const [tickerValue, setTickerValue] = useState(ticker ?? '')
  const [name, setName] = useState('')

  return (
    <main style={{ padding: 24 }}>
      <h1>Stock Form</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'grid', gap: 12, maxWidth: 360 }}
      >
        <label style={{ display: 'grid', gap: 6 }}>
          <span>Ticker</span>
          <input
            value={tickerValue}
            onChange={(e) => setTickerValue(e.target.value)}
            readOnly={Boolean(ticker)}
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </main>
  )
}

export default Form
