import { useQuery } from "react-query";
import getProducts from "../services/products.service";
import { IProduct } from "../models/products.type";

interface IProductsListDto {
    data: IProduct[] | undefined;
    isLoading: boolean;
    error: string | undefined;
}
export function useGetProducts(id?: number): IProductsListDto {
    const query = useQuery(
        ["products", id],
        async () => getProducts(id)
    );

    const error = formatError(query.error as Error);

    return {
        data: query.data?.products,
        isLoading: query.isLoading,
        error
    }
}

function formatError(err: Error): string | undefined {
    if (!err) return;
    try {
        const error = JSON.parse(err.message);

        return error.message;
    } catch (error) {
        return "Unfortunately it was not possible to retrieve the products.";
    }
}