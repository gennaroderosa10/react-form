import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import articoli from './assets/articoli'

function App() {
  const [newArticolo, setNewArticolo] = useState(null)

  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <h1>
            ARTICOLI
          </h1>
        </nav>
      </header>

      <main>
        {articoli.map((articolo) => {
          return (
            <div className="alert alert-light">
              {articolo}
            </div>
          )
        })}


        <label for="inputArticolo" className="form-label">Inserisci un nuovo articolo</label>
        <input type="text" id="inputArticolo" className="form-control"></input>
      </main>
    </>
  )
}

export default App
