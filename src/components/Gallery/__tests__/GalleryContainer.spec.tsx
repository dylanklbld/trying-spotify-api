import { fireEvent, render, screen } from '@testing-library/react';

import GalleryContainer from '../GalleryContainer';
import React from 'react';

jest.mock("../../Spinner", () => ({Spinner:(props:any) => <div data-testid="spinner" {...props} />}));

describe('GalleryContainer', () => {
  it('should render GalleryContainer with children', () => {
    const {container} = render(<GalleryContainer isLoading={false}><p>OUTPUT</p><p>OUTPUT</p></GalleryContainer>)
    expect(container).toMatchSnapshot()
  })

  it('should render GalleryContainer with children and spinner', () => {
    const {container} = render(<GalleryContainer isLoading={true}><p>OUTPUT</p><p>OUTPUT</p></GalleryContainer>)
    screen.getByTestId("spinner")
    expect(container).toMatchSnapshot()
  })

})