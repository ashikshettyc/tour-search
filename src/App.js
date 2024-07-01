import { useEffect, useState } from 'react';
import './App.css';
import Tours from './Components/Tours';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [tours, setTours] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setTours(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = tours.filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filtered);
  }, [search, tours]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-3xl font-bold mb-8">Tour Search</div>
      <div className="relative w-80 mb-8">
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search tours..."
          className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full max-w-xl">
        <Tours filterData={filterData} />
      </div>
    </div>
  );
}

export default App;
