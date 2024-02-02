// components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItemList from './NewsItemList';

const Dashboard = ({ token }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const res = await axios.get('/api/news', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNewsItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNewsItems();
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <NewsItemList newsItems={newsItems} />
    </div>
  );
};

export default Dashboard;
