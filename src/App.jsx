import './App.css'
import Header from './components/header'
import Welcome from './components/welcome'

function App() {

  return (
    <>
      <Header title={'Contabilità'}></Header>
      <Welcome userName={'Alessandro'} total={100}/>
    </>
  )
}

export default App
