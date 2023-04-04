import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter, getFilter } from '../../redux/slicer';
import Input from '../Input/Input';

const Filter = () => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(getFilter);

  const changeFilterSearch = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <h2 className={css.filterTitle}>Find contacts by name</h2>
      <Input
        type="text"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        name="filter"
        value={filterSearch}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilterSearch}
      />
    </>
  );
};

export default Filter;
