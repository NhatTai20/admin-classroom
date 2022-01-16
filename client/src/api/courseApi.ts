import axiosClient from "./axiosClient";

const courseApi = {
    async getAll() {
        var qs = require('qs');
        const response = await axiosClient.get('courses/getAllCourses', {
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

export default courseApi