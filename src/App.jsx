import { useState } from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        <h1 className="text-3xl sm:text=6xl font-bold text-center">What is your "One Thing"?</h1>
        <form
          className=""
          //onSubmit
        >
          <input type="text"/>
          <button>
            <ArrowCircleRightIcon className="h-12 w-12" />
          </button>
        </form>

      </div>

    </main>
  )
}

export default App
