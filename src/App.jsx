import './App.css';
import ExpenseForm from './components/expense-form';
import Header from './components/header';
import Welcome from './components/welcome';
import {useState} from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  console.log(total);
  return (
      <>
        <Header title={'Contabilità'}></Header>
        <Welcome userName={'Alessandro'} total={total}/>
        <ExpenseForm setExpenses={setExpenses} />
      </>
  );
}

export default App;
