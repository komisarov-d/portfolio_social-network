import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    createPost,
    getStatus,
    getUserProfile,
    likePost,
    removePost, savePhoto,
    updateStatus, updateUserProfileData
} from "../../redux/ProfileStore/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return <Profile savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId}
                        updateUserProfileData={this.props.updateUserProfileData}
                        removePost={this.props.removePost}
                        likePost={this.props.likePost}
                        posts={this.props.posts}
                        profile={this.props.profile}
                        createPost={this.props.createPost}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    posts: state.profile.posts,
    status: state.profile.status,
    userId: state.auth.userId
})


export default compose(connect(mapStateToProps, {
        updateUserProfileData,
        getUserProfile,
        createPost,
        getStatus,
        updateStatus,
        likePost,
        removePost,
    savePhoto
    }),
    withRouter, WithAuthRedirect)(ProfileContainer)
