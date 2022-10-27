import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { Header } from '../components/Common';
import { Table, Nodata, TableHeader } from '../components/Home';
import { AppContext } from '../context/AppState';

const HomePage = () => {
  const { products } = useContext(AppContext);

  const [index, setIndex] = useState(0);
  const [tableIndex, setTableIndex] = useState(0);

  const term = useRef();

  const [filteredProducts, setFilteredProducts] = useState([...products]);

  let tempProducts = [...products];

  const handleSearch = () => {
    tempProducts = tempProducts?.filter((item) =>
      item.series
        .toLowerCase()
        .trim()
        .includes(term.current.value.trim().toLowerCase())
    );
    setFilteredProducts(tempProducts);
  };

  const handleSeriesSort1 = () => {
    tempProducts = tempProducts?.sort((a, b) =>
      a.series.localeCompare(b.series)
    );
    setFilteredProducts(tempProducts);
  };

  const handleSeriesSort2 = () => {
    tempProducts = tempProducts?.sort((a, b) =>
      b.series.localeCompare(a.series)
    );
    setFilteredProducts(tempProducts);
  };

  return (
    <>
      <Header tabs index={index} setIndex={setIndex} />
      <div className='px-4'>
        <TableHeader
          term={term}
          handleSearch={handleSearch}
          tableIndex={tableIndex}
          setTableIndex={setTableIndex}
        />
        <hr />
      </div>
      {index === 0 && tableIndex === 0 ? (
        <Table
          handleSeriesSort1={handleSeriesSort1}
          handleSeriesSort2={handleSeriesSort2}
          filteredProducts={filteredProducts}
        />
      ) : (
        <Nodata />
      )}
    </>
  );
};

export default HomePage;
