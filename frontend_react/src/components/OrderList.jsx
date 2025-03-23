// src/components/OrderList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      {orders.map(order => (
        <p key={order.id}>{order.item}</p>
      ))}
    </div>
  );
};

export default OrderList;


