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
import { createStore, combineReducers } from 'redux';
import {useSelector} from 'react-redux';


function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, SetValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entriesRedux = useSelector(state => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
 
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit for id ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      SetValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    SetValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title='Budget' ></MainHeader>
      <DisplayBalance title='Your Balance:' value={total} size='small' />
      {/* <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic> */}
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      {/* <Header as='h3'>History</Header> */}
      <MainHeader title='History' type='h3' />
      {/* <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}
      {/* {entries.map(entry => (
        <EntryLine description={entry.description} value={entry.value} isExpense={entry.isExpense} />
      ))} */}

      <EntryLines
        entries={entriesRedux}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <br />

      {/* <EntryLine description='Expense' value='$10.00' isExpense />
      <EntryLine description='Something' value='$20.00' /> */}
      {/* <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}

      {/* <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something urgent</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$30.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}

      {/* <Header as='h3'> Add new transaction</Header> */}
      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        SetValue={SetValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        SetValue={SetValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
      id: 1,
      description: "Work income",
      value: 1000.00,
      isExpense: false
  },
  {
      id: 2,
      description: "Water bill",
      value: 50.00,
      isExpense: true
  },
  {
      id: 3,
      description: "Rent",
      value: 300.00,
      isExpense: true
  },
  {
      id: 4,
      description: "Power bill",
      value: 30.00,
      isExpense: true
  }
];