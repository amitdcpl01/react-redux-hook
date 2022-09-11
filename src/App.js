import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, SetValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const  deleteEntry = (id) =>{}
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }

  function editEntry(id){
    console.log(`edit for id ${id}`);
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      SetValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }
  return (
    <Container>
      <MainHeader title='Budget' ></MainHeader>
      <DisplayBalance title='Your Balance:' value='2,550.53' size='small' />
      {/* <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic> */}
      <DisplayBalances />

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
      entries={entries} 
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
    value: "$1000,00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$50,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "$30,00",
    isExpense: true
  }
];
