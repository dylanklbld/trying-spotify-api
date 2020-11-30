import { fireEvent, render, screen } from '@testing-library/react';

import ContentViewСomponent from '../ContentViewСomponent';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock("../Spinner", () => ({Spinner:(props) => <div data-testid="spinner" {...props} />}));
jest.mock("../Buttons/ScrollUpButton.tsx", () => (props) => <div data-testid="scroll-button" {...props} />);


const handleFetchMoreMock = jest.fn().mockName('handleFetchMore')
const scrollIntoViewMock = jest.fn().mockName('scrollIntoView');

const getItems = (amount = 10) => [...new Array(amount).keys()].map((k, i) => ({
    id: i,
    text: `data-${k}`
}))

type TestProps ={
    items: Array<any>,
    isLoading: boolean,
    canFetchMore: boolean
}

const renderComponent = ({items, isLoading = false, canFetchMore = false }:TestProps)=>{
    return render(<ContentViewСomponent 
        items={items}
        isLoading={isLoading}
        canFetchMore={canFetchMore}
        handleFetchMore={handleFetchMoreMock}
        renderItem={(item:any)=><div key={item.id}>{item.text}</div>}
    />)
}

describe('ContentViewСomponent', () => {
    it('should render simple case', () => {
        const items = getItems()
        const {container} = renderComponent({items})
        expect(container).toMatchSnapshot()
    })
    
    it('should have showMore button', () => {
        const items = getItems()
        const {container} = renderComponent({items, canFetchMore:true})
        screen.getByText("Show more")
        
        expect(container).toMatchSnapshot()
    })
    
    it('should call fetchMore', () => {
        const items = getItems()
        renderComponent({items, canFetchMore:true})
        fireEvent.click(screen.getByText("Show more"))
        
        expect(handleFetchMoreMock).toHaveBeenCalled()
    })
    
    it('should have loading status', async () => {
        const items = getItems()
        renderComponent({items, isLoading: true, canFetchMore:true})

        const showMoreButton = screen.getByText("Show more")
        expect(showMoreButton).toBeDisabled()
        
        const spinners = await screen.findAllByTestId("spinner")
       
        expect(spinners.length).toBe(2)

        fireEvent.click(showMoreButton)
        expect(handleFetchMoreMock).not.toHaveBeenCalled()
    })

    it('should call scroll into view', async () => {
        global.window = Object.create(window);
        window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;       
        
        const items = getItems()
        renderComponent({items, canFetchMore:true})
        fireEvent.click(screen.getByTestId("scroll-button"))
        expect(scrollIntoViewMock).toHaveBeenCalled()
    })
  })