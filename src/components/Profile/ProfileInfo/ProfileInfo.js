import React from "react";
import {Loader} from "../../common/Loader/Loader";
import userPhoto from '../../../assets/images/User_avatar.png'
import s from '../Profile.module.css'
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {

if(!props.profile) {
    return <Loader/>
}
    return(
        <div>

            <div>
                {props.profile.photos.large ?
                    <img alt='profileAva' src={props.profile.photos.large}/>
                    :
                    <img className={s.avatar} src={userPhoto} alt="noAva"/>
                }

            </div>
            <div>
                {props.profile.fullName}
                <div>{'profile.aboutMe'}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo