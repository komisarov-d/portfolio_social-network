import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, setUsers, toggleFollowingProgress, unfollow} from "../../redux/UsersStore/usersActions";
import {Loader} from "../common/Loader/Loader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/UsersStore/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)}
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)}

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

// const mapStateToProps = (state) => {
//     return {
//         users: state.users.users,
//         totalUsersCount: state.users.totalUsersCount,
//         pageSize: state.users.pageSize,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         followingInProgress: state.users.followingInProgress
//     }
// }
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose(connect(mapStateToProps,{follow,  requestUsers, unfollow, setUsers, toggleFollowingProgress})) (UsersContainer)
