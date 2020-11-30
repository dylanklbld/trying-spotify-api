import { fireEvent, render, screen } from '@testing-library/react';

import NavBar from '../NavBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ path: 'dashboard' }),
    useLocation:()=>({ pathname:'dashboard/path' })
}));


describe('NavBar', () => {
  it('should render empty NavBar', () => {
    const { container } = render(<Router>
        <NavBar links={[]}/>
        </Router>)
   
    expect(container).toMatchSnapshot()
  })
  
  it('should render NavBar with links', () => {
    const navigationLinks = [
        {
            link:`a-b-c`,
            text: "A B C"
        },{
            link:`test`,
            text: "TEST"
        }
    ]
    
    const { container } = render(<Router><NavBar links={navigationLinks}/></Router>)
   
    expect(container).toMatchSnapshot()
  })

  it('should have specific active link', () => {
    const navigationLinks = [
        {
            link:`a-b-c`,
            text: "A B C"
        },{
            link:`path`,
            text: "active-TEST"
        }
    ]
    
    const { container } = render(<Router><NavBar links={navigationLinks}/></Router>)
   
    expect(container).toMatchSnapshot()
  })
})