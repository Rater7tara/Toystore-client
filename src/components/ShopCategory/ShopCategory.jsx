import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const ShopCategory = () => {
  const toys = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState(' Disney dolls');


  useEffect(() =>{
    const filtered = toys.filter(item => item.subCategory === category);
    setFilteredData(filtered);
  }, [toys, category]);
  

  console.log(filteredData);
    return (
      <div className='text-center'>
          <Tabs className="justify-center">
    <TabList>
      <Tab onClick={() => setCategory(' Disney dolls')}>Disney Doll</Tab>
      <Tab onClick={() => setCategory('Animated Character')}>Animated Character</Tab>
      <Tab onClick={() => setCategory('Disney Princess')}>Disney Princess</Tab>
    </TabList>

    <TabPanel>
      <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4'>
      {
        filteredData.slice(0, 3)?.map(item => <Category
          key={item._id}
          item={item}
          ></Category>)
          
      }
      </div>
    </TabPanel>
    <TabPanel>
    <div  className='grid md:grid-cols-2  lg:grid-cols-3 gap-4'>
    {
        filteredData.slice(0, 3)?.map(item => <Category
          key={item._id}
          item={item}
          ></Category>)
          
      }
    </div>
    </TabPanel>
    <TabPanel>
    <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
        filteredData.slice(0, 3)?.map(item => <Category
          key={item._id}
          item={item}
          ></Category>)
          
      }
    </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopCategory;