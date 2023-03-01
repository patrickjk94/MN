import {useState} from 'react'
import { updateFilterParams, filterComparator } from './data/dataFilter';
import TableControls from './components/table-controls/TableControls';
import CardList from './components/card-list/CardList';
import data from './data/data.json'
import './App.css';

function App() {
  
  const [filterParams, setFilterParams] = useState([]); 
  const [filteredData, setFilteredData] = useState(data);

  const updateAppFilterParams = (filterParam) => {
    console.log('filterParams', filterParams); 
    console.log('filterParam', filterParam);
    const updatedFilterParams = updateFilterParams(filterParams, filterParam); 

    setFilterParams(updatedFilterParams);
    console.log('updatedFilterParams', updatedFilterParams);
    setFilteredData(data.filter(filterComparator(updatedFilterParams)));
  }
  
  return (
    <div className="App">
      <header className="App-header"> </header>
      <TableControls updateFilterParams={updateAppFilterParams} /> 
      <CardList data={filteredData} /> 
    </div>
  );
}

export default App;
