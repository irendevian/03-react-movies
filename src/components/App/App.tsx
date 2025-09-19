import SearchBar from '../SearchBar/SearchBar';
import './App.module.css'

// const myToken = import.meta.env.VITE_API_TOKEN;


function App() {
  const handleSearch = (searchValue: string) => {
  console.log(searchValue);
  
  };

    return (
      <SearchBar onSearch={handleSearch}/>
    )
};

export default App;
