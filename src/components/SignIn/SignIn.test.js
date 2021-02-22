/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from './index';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignIn onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('testUsername'), 'kalle');
      fireEvent.changeText(getByTestId('testPassword'), 'password');
      fireEvent.press(getByTestId('testSubmitSignin'));
      
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        });
        
      });
    });
  });
});