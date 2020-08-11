import {PhotosType, ProfileType} from "../Types/Types";
import {instance, APIResponseType} from "./api";
type SavePhotoResponseDataType = {
    photos:PhotosType
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)

    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status}).then(response => response.data)
    },
    updateAvatar(profilePhoto: File) {
        const formData = new FormData()
        formData.append('image', profilePhoto)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile).then(response => response.data)
    }
}