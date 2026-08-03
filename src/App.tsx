import './App.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Footer />
    </main>
  )
}

export default App
