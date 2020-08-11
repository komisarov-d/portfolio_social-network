import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserIdSelector} from "../../redux/AuthStore/authSelectors";
import {getStatus, getUserProfile} from "../../redux/ProfileStore/profileReducer";


type PathParamsType = {
    userId: string
}


export const ProfileContainerFC: React.FC<RouteComponentProps<PathParamsType>> = (props) => {
    const authorizedUserId = useSelector(getUserIdSelector)
    const dispatch = useDispatch()

    const refreshProfile = () => {
        let userId: number | null = +props.match.params.userId
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                props.history.push('/login')
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')")
        } else {
            dispatch(getUserProfile(userId))
            dispatch(getStatus(userId))
        }
    }
    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId, refreshProfile, authorizedUserId])

    return <Profile isOwner={!props.match.params.userId}/>

}
export const ProfileContainerFCWithRouter = withRouter(ProfileContainerFC);

