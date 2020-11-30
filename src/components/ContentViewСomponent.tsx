import React, { useEffect } from 'react'

import { FetchMoreOptions } from 'react-query/types/core/query'
import GalleryContainer from './Gallery/GalleryContainer'
import ShowMoreButton from './Buttons/ShowMoreButton'
import UpButton from './Buttons/ScrollUpButton'
import {useIsInView} from '../hooks/useIsInView'

type Props = {
    items: Array<any>,
    isLoading: boolean,
    canFetchMore: boolean,
    handleFetchMore: (fetchMoreVariable?: any, options?: FetchMoreOptions | undefined) => Promise<any[] | undefined>,
    renderItem:(item: any) => JSX.Element
}

function ContentViewComponent({ items, isLoading, canFetchMore, handleFetchMore, renderItem  }: Props): React.ReactElement {
    const [renderUpButton, setRenderUpButton] = React.useState(false)
    const [refAnchor, inView] = useIsInView<HTMLDivElement>()

    useEffect(() => {
        setRenderUpButton(!inView)
    }, [inView])
    
    const scrollUp = () => {
        refAnchor?.current?.scrollIntoView({block: "center", behavior: "smooth"})
    }

    return (
            <>
                <div ref={refAnchor} id="scroll-top-anchor" />   
                <GalleryContainer isLoading={isLoading}>
                    {items?.map((item: any) => renderItem(item))}
                </GalleryContainer>
                {renderUpButton && <UpButton onClick={scrollUp} />}
                <ShowMoreButton 
                    onClick={handleFetchMore}
                    isLoading={isLoading}
                    isShown={Boolean(canFetchMore)} 
                />
            </>
        )
}

export default ContentViewComponent