import React, {ChangeEvent, useState} from "react";
import {Loader} from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import {ContactsType, ProfileType} from "../../../Types/Types";
import s from "../Profile.module.css";
import userPhoto from "../../../assets/images/User_avatar.png";
import ProfileReduxForm from "./ProfileDataForm";
import Contact from "./Contact";
import {useDispatch, useSelector} from "react-redux";
import {getProfileSelector} from "../../../redux/ProfileStore/profileSelectors";
import {savePhoto, updateUserProfileData} from "../../../redux/ProfileStore/profileReducer";
import {Button} from "antd";

type PropsType = {
    isOwner: boolean
}

const ProfileInfo: React.FC<PropsType> = ({   isOwner}) => {
    let [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const profile = useSelector(getProfileSelector)

    if (!profile) {
        return <Loader/>
    }

    const onSubmit = (formData: ProfileType) => {
        dispatch(updateUserProfileData(formData))
                setEditMode(false)
    }
    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }
    return (
        <div>
            <div>
                <img alt='profileAva' className={s.avatar} src={profile.photos.large || userPhoto}/>
               <div> {isOwner && <input title={'Update user photo'} type={'file'} onChange={onMainPhotoSelector}/>}</div>
                {editMode ?
                    <ProfileReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} goToEditMode={() => {setEditMode(true)}} isOwner={isOwner}/>}
            </div>
            <ProfileStatus/>
        </div>
    )
}
type ProfileDataPropsType = {
    profile:ProfileType
    isOwner:boolean
    goToEditMode: () => void
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <Button onClick={goToEditMode}>Edit profile</Button>
            </div>}
            <div>
                <b>Full name</b>:{profile.fullName}
            </div>
            <div>
                <b>lookingForAJob</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
        </div>
    )
}
export default ProfileInfo