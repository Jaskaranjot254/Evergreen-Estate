
import React, { useState } from 'react';
import '../filter/filter.css';
import { listData } from '../../lib/data'; // Assuming listData is imported
import Card from '../card/card';

const Filter = () => {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [property, setProperty] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    // Filter listData based on current state
    let filtered = listData.filter(item => {
      // Filter conditions based on user inputs
      return (
        (city === '' || item.address.toLowerCase().includes(city.toLowerCase())) &&
        (type === '' || item.type === type) &&
        (property === '' || item.property === property) &&
        (!minPrice || item.price >= parseInt(minPrice)) &&
        (!maxPrice || item.price <= parseInt(maxPrice)) &&
        (!bedroom || item.bedRooms === parseInt(bedroom))
      );
    });

    // Set filtered data to state
    setFilteredData(filtered);
  };

  return (
    <div className="filter">
      <h1>
        Search result for <b>Mumbai</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Mumbai</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Bedroom"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
        </div>

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display filtered results */}
      <div className="filtered-results">
        {filteredData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
