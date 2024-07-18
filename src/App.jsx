import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThePageHeader from './components/ThePageHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThePageHeader />
      <div className='container mx-auto text-center'>
        <div className=' mx-auto  w-32 text-center  '>
          <a href="https://vitejs.dev" className='' target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className=' text-5xl text-indigo-700 font-bold'>Vite + React</h1>
        <div className="card">
          <button className='border px-4 py-2 rounded-lg' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
