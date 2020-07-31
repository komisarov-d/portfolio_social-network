import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e91d2c9-02cb-42ec-9f13-e2205e00b2f8'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    }

}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
