import { fireEvent, render, screen } from '@testing-library/react';

import CountrySelector from '../CountrySelector'
import React from 'react';
import styled from 'styled-components';

const mockHistoryPush = jest.fn();
const mockUrlHash =`#access_token=My123Token&token_type=Bearer&expires_in=3600`

const countryMap ={
  'DE': 'Germany',
  'RU': 'Russia'
}

const setCountryMock = jest.fn().mockName('setCountry')

describe('CountrySelector', () => {
  it('should render', () => {
    const {container} = render(<CountrySelector {...{countryMap, setCountry:setCountryMock}}/>)
    expect(container).toMatchSnapshot()
  })
  
  it('should render with selected country', () => {
    const {container} = render(<CountrySelector {...{countryMap, setCountry:setCountryMock, selected:"RU"}}/>)
    
    const selectedButton = screen.getByText('Russia')
    const style1 = window.getComputedStyle(selectedButton)
    expect(style1.opacity).toBe("0.5")


    const otherButton = screen.getByText('Germany')
    const style2 = window.getComputedStyle(otherButton)
    expect(style2.opacity).toBe("1")


    expect(container).toMatchSnapshot()
  })

  it('should call select country', () => {
    render(<CountrySelector {...{countryMap, setCountry:setCountryMock, selected:"DE"}}/>)
    const button = screen.getByText('Russia')
    fireEvent.click(button)

    expect(setCountryMock).toBeCalledWith("RU")
  })

  it('should call reset', () => {
    render(<CountrySelector {...{countryMap, setCountry:setCountryMock, selected:"DE"}}/>)
    const resetButton = screen.getByText("🔄")
    fireEvent.click(resetButton)

    expect(setCountryMock).toBeCalledWith(null)
  })
})