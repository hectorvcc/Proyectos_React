import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  /*const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/

    //const midudev = { isFollowing: true, userName: 'midudev' }
    const pheralb = { isFollowing: false, userName: 'pheralb' }

  return (
    <section className="App">
      <TwitterFollowCard
        userName='midudev'
        //name={'Miguel Ángel Durán'} 
        isFollowing
      >
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard
        userName='pheralb'
        //name={'Pablo Heranandez'} 
        isFollowing={false}

      >pheralb
      </TwitterFollowCard>

      <TwitterFollowCard
        userName='bliztdev'
        //name={'Pablo Heranandez'} 
        isFollowing={false}

      >victor
      </TwitterFollowCard>

    </section>
  )
}


