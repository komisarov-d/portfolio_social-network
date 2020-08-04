import React from "react";
import {Loader} from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import ProfileDescription from "./ProfileDescription";
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, updateUserProfileData}) => {

if(!profile) {
    return <Loader/>
}
const onMainPhotoSelector = (e) => {
    e.preventDefault()
    if (e.target.files.length ){
        savePhoto(e.target.files[0])
    }
}
    return(
        <div>
           <ProfileDescription updateUserProfileData={updateUserProfileData} isOwner={isOwner} onMainPhotoSelector={onMainPhotoSelector} profile={profile}/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    )
}
export default ProfileInfo