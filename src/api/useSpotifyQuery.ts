import axiosInstance from '../helpers/getAxiosInstance'
import { useInfiniteQuery } from "react-query";

type ParameterProps = {
    offset: number,
    limit: number
}

const limitDefault = 20
const paramsDefault: ParameterProps = { offset: 0, limit: limitDefault }

const fetchMoreData = (dataKey: string) => (data: any, _allGroups: any) => {
    const { total, offset } = data[dataKey];

    if (total > offset + limitDefault) {
        return {
            offset: offset + limitDefault,
            limit: limitDefault
        };
    }
}

const fetchData = async (key: string, params: ParameterProps = paramsDefault) => {
    const { limit, offset } = params

    const { data } = await axiosInstance.get(`/${key}?offset=${offset}&limit=${limit}`);
    return data
}

const fetchDataWithOptions = (extraParams: any)=> async (key: string, params: ParameterProps = paramsDefault) => {
    const { limit, offset } = params
    const extras = '&' + Object.keys(extraParams).map((k)=>`${k}=${extraParams[k]}`).join('&')

    const { data } = await axiosInstance.get(`/${key}?offset=${offset}&limit=${limit}${extras}`);
    return data
}

export default function useFetchDataQueryInfinite(path: string, dataKey: string, extraParameters?: any) {
    const fetchFunction = extraParameters ? fetchDataWithOptions(extraParameters) : fetchData
    return useInfiniteQuery<any, Error>(path, fetchFunction, { getFetchMore: fetchMoreData(dataKey) });
}
