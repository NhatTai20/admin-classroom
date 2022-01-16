import axiosClient from "./axiosClient";

const userApi = {
    async getAll(params: any) {
        var qs = require('qs');
        const response = await axiosClient.get('/users/getAllUser', {
            params: {
                ...params,
            },
            paramsSerializer:  (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            },
        })
        return response
    },

    get(id: any) {
        const url = `/courses/getCourse/${id}`;
        return axiosClient.get(url);
    },

}

export default userApi