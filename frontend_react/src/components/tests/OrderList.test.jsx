// src/components/__tests__/OrderList.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import OrderList from '../OrderList';

jest.mock('axios');

test('renders orders fetched from API', async () => {
  axios.get.mockResolvedValue({
    data: [{ id: 1, item: 'Laptop' }, { id: 2, item: 'Phone' }],
  });

  render(<OrderList />);

  expect(await screen.findByText('Laptop')).toBeInTheDocument();
  expect(await screen.findByText('Phone')).toBeInTheDocument();
});


