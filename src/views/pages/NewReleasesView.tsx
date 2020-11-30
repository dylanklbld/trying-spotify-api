import { PageContainer, SectionTitle } from '../../components/Basic'

import AlbumItem from '../../components/Gallery/AlbumItem'
import ContentOutputView from '../../components/ContentViewСomponent'
import ErrorMessage from '../../components/ErrorMessage'
import React from 'react'
import { itemListExtractor } from '../../helpers/getItemListExtractor'
import useFetchNewReleasesInfinite from '../../api/useNewReleases'

const titleText = "List of this week releases"
const getAlbumsArray = itemListExtractor('albums')

function NewReleasesView(): React.ReactElement {
    const {
        data,
        isFetching,
        isFetchingMore,
        fetchMore,
        canFetchMore,
        error,
    } = useFetchNewReleasesInfinite()

    const isLoading = isFetching || Boolean(isFetchingMore)
    const items = getAlbumsArray(data)
    const handleFetchMore = ()=>fetchMore()
    const renderItem = (item:any)=><AlbumItem key={item.id} data={item}/>
    
    return (
        <PageContainer>
            <SectionTitle>{titleText}</SectionTitle>
            {error && <ErrorMessage error={error as Error} />}
            <ContentOutputView
                    items={items}
                    isLoading={isLoading}
                    canFetchMore={!isFetching && Boolean(canFetchMore)}
                    handleFetchMore={handleFetchMore}
                    renderItem={renderItem}
                />
        </PageContainer>
    )
}

export default NewReleasesView