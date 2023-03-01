import './TableControls.css';
import { COMPARISON_TYPE } from '../../data/dataFilter';
import Toggle from './Toggle.js';
import Search from './Search.js';

function TableControls(props) {

  const updateFilterOn = (name, comp) => {
    return (val) => {
      props.updateFilterParams({ filterKey : name, comparison : comp, value : val}); 
    }
  }

  return (
    <div className="table-controls">
      <Search className="tc-elem" name="Group" update={updateFilterOn("Group", COMPARISON_TYPE.CONTAINS)} />
      <Search className="tc-elem" name="Code" update={updateFilterOn("Code", COMPARISON_TYPE.CONTAINS)} />
      <Search className="tc-elem" name="Description" update={updateFilterOn("Description", COMPARISON_TYPE.CONTAINS)} />
      <Search className="tc-elem" name="Label" update={updateFilterOn("Label", COMPARISON_TYPE.CONTAINS)} />
      <Toggle className="tc-elem" name="Global" update={updateFilterOn("Global", COMPARISON_TYPE.EQUALS)} /> 
      <Toggle className="tc-elem" name="Revenue" update={updateFilterOn("Revenue", COMPARISON_TYPE.EQUALS)} /> 
    </div>
  );
}

export default TableControls;
