import React, { useEffect, useState } from 'react';

function Categories({ handleClick }) {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/categories')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryNames(data);
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
