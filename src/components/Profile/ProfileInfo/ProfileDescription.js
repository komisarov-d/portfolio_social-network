import React, {useState} from "react";
import s from "../Profile.module.css";
import userPhoto from "../../../assets/images/User_avatar.png";
import Contact from "./Contact";
import ProfileReduxForm from "./ProfileDataForm";

const ProfileDescription = ({profile, onMainPhotoSelector, isOwner, updateUserProfileData}) => {
    const [editMode, setEditMode] = useState(false)
    const onSubmit = (formData) => {
        updateUserProfileData(formData).then(() => {
                setEditMode(false)
            }
        )
    }
    return (
        <div>
            <div>
                <img alt='profileAva' className={s.avatar} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}
                {editMode ?
                    <ProfileReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={isOwner}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit profile</button>
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
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


export default ProfileDescription