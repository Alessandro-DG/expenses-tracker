import {useState} from 'react';

function ExpenseForm({ setExpenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      description,
      amount,
      category
    };
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setDescription('');
    setAmount('');
    setCategory('');
  }

  return (
      <form onSubmit={handleSubmit} className="expense-form">
        <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Seleziona una categoria</option>
          <option value="cibo">Cibo</option>
          <option value="trasporti">Trasporti</option>
          <option value="hobby">Hobby</option>
          <option value="salute">Salute</option>
          <option value="altro">Altro</option>
        </select>
        <input
            name="description"
            value={description}
            placeholder="Inserisci la descrizione della spesa"
            onChange={(e) => setDescription(e.target.value)}
        />
        <input
            name="amount"
            value={amount}
            type="number"
            placeholder="Inserisci l'importo della spesa"
            onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Aggiungi spesa</button>
      </form>
  );
}

export default ExpenseForm;