import { fireEvent, render, screen } from '@testing-library/react';

import ErrorMessage from '../ErrorMessage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expiryTimeStorageKey } from '../../components/RedirectHandler'
import storage from '../../utils/localStorage'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ path: 'dashboard' }),
    useLocation:()=>({ pathname:'dashboard/path' })
}));

describe('Error Message', () => {
  it('should render', () => {
    const err = new Error('Error occured')
    const currentTime = new Date().getTime();
    storage.setItem(expiryTimeStorageKey, currentTime+5000)
    const { container } = render(<ErrorMessage error={err} />)
   
    expect(container).toMatchSnapshot()
  })
  
  it('should render with session expired message', () => {
    const err = new Error('Error occured')
    storage.setItem(expiryTimeStorageKey, 0)
    const { container } = render(<ErrorMessage error={err} />)
   
    expect(container).toMatchSnapshot()
  })

})