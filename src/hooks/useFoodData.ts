import { useQuery } from "@tanstack/react-query";
import axios, { Axios, AxiosPromise } from "../../node_modules/axios/index"
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8090';

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}