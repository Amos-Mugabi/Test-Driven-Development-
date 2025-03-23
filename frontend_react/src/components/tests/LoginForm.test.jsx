// src/components/__tests__/LoginForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

test('shows error message when username is empty', () => {
  render(<LoginForm />);

  fireEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Username is required')).toBeInTheDocument();
});

test('updates input field on user input', () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByLabelText('Username'), {
    target: { value: 'testuser' },
  });

  expect(screen.getByLabelText('Username')).toHaveValue('testuser');
});


