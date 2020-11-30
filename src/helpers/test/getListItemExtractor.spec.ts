import { itemListExtractor } from '../getItemListExtractor'

it('should return one array', () => {
    const dataInChunks = [{
        chunk:{items: [1, 2, 3]}
    }, 
    {
        chunk:{items: ['a','b','c']}
    }]

    const getChunks = itemListExtractor('chunk')
    expect(getChunks(dataInChunks)).toStrictEqual([1, 2, 3, "a", "b", "c"])
})
