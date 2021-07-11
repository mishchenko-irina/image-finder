import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';


export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = searchValue => {
    setInputValue(searchValue);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
    </div>
  );
}