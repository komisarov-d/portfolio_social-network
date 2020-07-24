import React, {useEffect} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect, useDispatch} from "react-redux";
import {setUserProfile} from "../../redux/ProfileStore/profileActions";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            debugger;
            dispatch(setUserProfile(response.data))
        })
    }, [dispatch, props.match.params.userId])

    return (
        <Profile/>
        )
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(null, null)(WithUrlDataContainerComponent)

