export const itemListExtractor = (key:string) => (data:any) => data?.reduce((acc:[], value:any)=>{
    return acc.concat(value[key]?.items)
},[])