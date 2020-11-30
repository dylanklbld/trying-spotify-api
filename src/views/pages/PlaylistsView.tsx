import { PageContainer, SectionTitle } from '../../components/Basic'
import React, { useEffect, useState } from 'react'

import ContentOutputView from '../../components/ContentViewСomponent'
import CountrySelector from '../../components/CountrySelector'
import ErrorMessage from '../../components/ErrorMessage'
import PlaylistItem from '../../components/Gallery/PlaylistItem'
import { itemListExtractor } from '../../helpers/getItemListExtractor'
import useFetchFeaturePlaylistsInfinite from '../../api/useFeaturePlaylists'

const titleText = "List of feature playlists"
const getPlaylistsArray = itemListExtractor('playlists')

const countryCodeIconMap = {
    'DE': "🇩🇪",
    'RU': "🇷🇺",
    'FI': "🇫🇮"
}

function PlaylistsView(): React.ReactElement {
    const [selectedCountry, setCountry] = useState<string | null>(null)

    const {
        data,
        isFetching,
        isFetchingMore,
        fetchMore,
        canFetchMore,
        error,
        refetch,
    } = useFetchFeaturePlaylistsInfinite(selectedCountry && { country: selectedCountry })

    useEffect(() => {
        refetch()
    }, [selectedCountry])

    const items = getPlaylistsArray(data)
    const isLoading = isFetching || Boolean(isFetchingMore)
    const handleChangeCountry = (countryCode:string | null) => setCountry(countryCode)
    const handleFetchMore = ()=>fetchMore()
    const renderItem = (item:any)=><PlaylistItem key={item.id} data={item}/>
    
    return (
            <PageContainer>
                <SectionTitle>{titleText}</SectionTitle>
                <CountrySelector 
                    setCountry={handleChangeCountry}
                    countryMap={countryCodeIconMap} 
                    selected={selectedCountry} 
                />
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

export default PlaylistsView