import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import {getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  
  const dispath = useDispatch();

  const handleInputChange = event => {
  dispath(filterContacts(event.currentTarget.value));
  }

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleInputChange}
      />
    </Label>
  );
};

export default Filter;


