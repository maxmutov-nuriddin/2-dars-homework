
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Ourproduct from './components/ourproduct/Ourproduct'
import Products from './components/products/Products'
import Information from './components/information/information'
import Hero from './components/hero/Hero'
import Ourcomand from './components/ourcommand/Ourcomand'
import News from './components/news/News'




function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Ourproduct />
        <Information />
        <Ourcomand />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
