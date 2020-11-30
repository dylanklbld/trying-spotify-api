import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import ShowMoreButton from '../ShowMoreButton';

jest.mock("../../Spinner", () => ({Spinner:(props) => <div data-testid="spinner" {...props} />}));

const onClickMock = jest.fn()

describe('ShowMoreButton', () => {
  it('should render button', () => {
    render(<ShowMoreButton onClick={onClickMock} isLoading={false} isShown={true} />)
    
    expect(screen.queryByText("Show more")).toBeInTheDocument()
    const button = screen.getByText("Show more")
    fireEvent.click(button)
    expect(onClickMock).toBeCalled()
  })
  it('should render with spinner', () => {
    render(<ShowMoreButton onClick={onClickMock} isLoading={true} isShown={true} />)
    const button = screen.getByText("Show more")
    expect(button).toBeDisabled()
    screen.getByTestId("spinner")
  })
  it('should not render', () => {
    render(<ShowMoreButton onClick={onClickMock}  isLoading={false} isShown={false} />)
    expect(screen.queryByText("Show more")).not.toBeInTheDocument()
    
  })
})