import React from "react"
import { Intro } from "./pages/Intro/index"
import { Header } from './pages/Header/index'
import { Media } from './pages/Media/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Media />
    </div>
  )
}

export default App
