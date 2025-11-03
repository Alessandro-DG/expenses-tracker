import './App.css'
import ExpenseForm from './components/expense-form'
import Header from './components/header'
import Welcome from './components/welcome'

function App() {

    return (
        <>
            <Header title={'Contabilità'}></Header>
            <Welcome userName={'Alessandro'} total={100}/>
            <ExpenseForm/>
        </>
    )
}

export default App
