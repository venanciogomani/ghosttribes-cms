import { IProduct } from "../models/products.type";
import { api } from "./api.service";

export default function getProducts(id?: number) {
    return api
        .url(`/products${id? `/${id}` : ''}`)
        .headers({
            "Content-Type": "application/json",
        })
        .get()
        .fetchError((error) => {
            throw new FetchError("Failed to fetch product data", error);
        })
        .json<IProduct[]>();
}

class FetchError extends Error {
    constructor(message: string, cause: unknown) {
        super(message);
        (this as any).cause = cause;
        this.name = "FetchError";
    }
}