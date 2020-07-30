import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    createPost,
    getStatus,
    getUserProfile,
    likePost,
    removePost,
    updateStatus
} from "../../redux/ProfileStore/profileActions";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 9485
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile removePost={this.props.removePost}
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
    status: state.profile.status
})


export default compose(connect(mapStateToProps, {
        getUserProfile,
        createPost,
        getStatus,
        updateStatus,
        likePost,
        removePost
    }),
    withRouter, WithAuthRedirect)(ProfileContainer)
