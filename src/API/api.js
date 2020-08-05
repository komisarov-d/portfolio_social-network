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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
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
    },
    updateAvatar(profilePhoto){
        const formData = new FormData()
        formData.append('image', profilePhoto)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile){
        return instance.put(`profile`, profile)
    }

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl(){
        return instance.get('security/get-captcha-url')
    }
}