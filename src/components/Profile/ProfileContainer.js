import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileStore/profileActions";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)


    }

    render() {
        if (!this.props.isAuth === false)return <Redirect to={'/login'}/>
        return <Profile/>
    }
}
const mapStateToProps = state => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
})
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

