import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Categories({ handleClick }) {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/category/getAll')
    .then(res => {
      console.log(res.data);
      setCategoryNames(res.data);
    });
    }, []);
  return (
    <div className="arrival-menu text-center pt-20">
      <button onClick={handleClick} className="abtn" data-filter="*">
        All
      </button>
      {categoryNames.map((category) => (
        <button
          onClick={() => handleClick(category.id)}
          key={category.id}
          className="abtn"
          data-filter={category.categoryName}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
}

export default Categories;
