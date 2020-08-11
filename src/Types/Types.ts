export type PostType = {
    id: number
    title: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ContactsType = {
    github: string
    website: string
    youtube: string
    mainLink: string
    vk: string
    facebook: string
    twitter: string
    instagram: string
}
export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}
