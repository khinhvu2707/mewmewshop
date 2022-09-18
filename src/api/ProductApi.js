import axiosClient from "./AxiosClient";
import queryString from "query-string";

const productApi = {

    getAll() {
        const url = `products/`;
        return axiosClient.get(url);
    },

    getPage(params) {
        const paramsString = queryString.stringify(params);
        const url = `products?${paramsString}`;
        return axiosClient.get(url);
    },

    get(id) {
        const url = `products/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `products/`;
        console.log("data")
        console.log(data)
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `products/${data.id}/`;
        return axiosClient.put(url, data);
    },

    remove(id) {
        const url = `products/${id}/`;
        return axiosClient.delete(url);
    },

}

export default productApi;
