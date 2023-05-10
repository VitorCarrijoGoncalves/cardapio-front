import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "../../node_modules/axios/index"
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8090';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2, // qts vezes tentar se der algum erro
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}