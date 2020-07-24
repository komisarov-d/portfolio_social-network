import React from "react";
import {useSelector} from "react-redux";
import {Loader} from "../../common/Loader/Loader";
import userPhoto from '../../../assets/images/User_avatar.png'
const ProfileInfo = () => {
const profile = useSelector(state => state.profile.profile)
if(!profile) {
    return <Loader/>
}
    return(
        <div>
            <div>
                {profile.photos ?
                    <img alt='profileAva' src={profile.photos.large}/>
                    :
                    <img src={userPhoto} alt="noAva"/>
                }

            </div>
            <div>
                {profile.fullName}
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo