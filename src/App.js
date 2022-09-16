import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useEffect } from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import { createStore, combineReducers } from 'redux';
import { useSelector } from 'react-redux';


function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector(state => state.entries);
  const { isOpen, id } = useSelector(state => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value);
      }
      return totalIncomes += Number(entry.value);
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    // console.log(`total income are:${totalIncomes} and total expenses are:${totalExpenses}`);
  }, [entries]);

  return (
    <Container>
      <MainHeader title='Budget' ></MainHeader>
      <DisplayBalance title='Your Balance:' value={total} size='small' />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title='History' type='h3' />
      <EntryLines
        entries={entries}
      />
      <br />
      {/* <Header as='h3'> Add new transaction</Header> */}
      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm />
      <ModalEdit
        isOpen={isOpen} {...entry}
      />
    </Container>
  );
}

export default App;

