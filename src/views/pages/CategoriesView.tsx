import {PageContainer, SectionTitle} from '../../components/Basic'
import React, { useEffect, useState } from 'react'

import CategoryItem from '../../components/Gallery/CategoryItem'
import ContentOutputView from '../../components/ContentViewСomponent'
import ErrorMessage from '../../components/ErrorMessage'
import { itemListExtractor } from '../../helpers/getItemListExtractor'
import useFetchCategoriesInfinite from '../../api/useCategories'

const titleText = "List of Categories"

const getCategoriesArray = itemListExtractor('categories') 

function CategoriesView(): React.ReactElement {
    const {
        data,
        isFetching,
        isFetchingMore,
        fetchMore,
        canFetchMore,
        error,
      } = useFetchCategoriesInfinite()

      const isLoading = isFetching || Boolean(isFetchingMore)
      const items = getCategoriesArray(data)
      const handleFetchMore = ()=>fetchMore()
      const renderItem = (item:any)=><CategoryItem key={item.id} data={item}/>
      
    return (
            <PageContainer>
                <SectionTitle>{titleText}</SectionTitle>
                {error && <ErrorMessage error={error as Error}/>}
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

export default CategoriesView