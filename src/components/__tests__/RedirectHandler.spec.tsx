import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import RedirectHandler from '../RedirectHandler'

const mockHistoryPush = jest.fn();
const mockUrlHash =`#access_token=My123Token&token_type=Bearer&expires_in=3600`

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('RedirectHandler', () => {
  it('should redirect to /', () => {
    render(<RedirectHandler />)
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  })
  it('with hash should redirect to /dasboard', () => {
    render(<RedirectHandler location={{ hash:mockUrlHash }} />)
    expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
  })
})