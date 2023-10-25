import { BrowserRouter, Route, Routes } from "react-router-dom"
import BusinessIdeaInput from "./Components/BusinesInput"

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" Component=<></>>
            <Route path="/" Component=<></>/>
            <Route path="/" Component=<></>/>
          </Route>
        </Routes>
      </BrowserRouter> */}


      <div className="App">
      <header className="App-header">
        <h1>Business Idea Generator</h1>
      </header>
      <main>
      <BusinessIdeaInput/>
      </main>
    </div>
    </>
  )
}

export default App
