import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import articoli from './assets/articoli'

function App() {
  const [listaArticoli, setListaArticoli] = useState(articoli)
  const [newArticolo, setNewArticolo] = useState("")

  function submitHandler(event) {
    event.preventDefault();
    setListaArticoli([...listaArticoli, newArticolo]);
  }

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
        {listaArticoli.map((articolo, index) => {
          return (
            <div key={index} className="alert alert-light">
              {articolo}
            </div>
          )
        })}

        <form onSubmit={submitHandler}>
          <label for="inputArticolo" className="form-label">Inserisci un nuovo articolo</label>
          <input
            type="text"
            id="inputArticolo"
            className="form-control"
            value={newArticolo}
            onChange={(event) => {
              setNewArticolo(event.target.value)
            }}
          ></input>
          <button type="submit" className="btn btn-primary mt-2">
            Aggiungi articolo
          </button>
        </form>
      </main>
    </>
  )
}

export default App
