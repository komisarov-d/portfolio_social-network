import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, setUsers, toggleFollowingProgress, unfollow} from "../../redux/UsersStore/usersReducer";
import {Loader} from "../common/Loader/Loader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../redux/UsersStore/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)}
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)}

    render() {
        return (
            <div>
                {this.props.isFetching && <Loader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(connect(mapStateToProps,{follow,  requestUsers, unfollow, setUsers, toggleFollowingProgress})) (UsersContainer)
