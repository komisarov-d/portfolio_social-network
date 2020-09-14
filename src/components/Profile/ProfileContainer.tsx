import React, {useCallback, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getUserIdSelector} from "../../redux/AuthStore/authSelectors";
import {getStatus, getUserProfile} from "../../redux/ProfileStore/profileReducer";





export const ProfileContainer: React.FC = () => {
    const authorizedUserId = useSelector(getUserIdSelector)
    const dispatch = useDispatch()
    const history = useHistory()
    let {userId} = useParams()
    const refreshProfile = useCallback(() => {

        let uId: number | null = userId
        if (!uId) {
            uId = authorizedUserId
            if (!uId) {
                // props.
                history.push('/login')
            }
        }
        if (!uId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')")
        } else {
            dispatch(getUserProfile(uId))
            dispatch(getStatus(uId))
        }
    }, [authorizedUserId, dispatch, history,userId])
    useEffect(() => {
        refreshProfile()
    }, [userId, refreshProfile, authorizedUserId])

    return <Profile isOwner={!userId}/>

}
export default ProfileContainer

