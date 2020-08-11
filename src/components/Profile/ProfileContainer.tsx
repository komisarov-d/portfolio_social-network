import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile} from "../../redux/ProfileStore/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/rootReducer";

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getUserProfile: (userId: number ) => void
    getStatus: (userId: number | null) => void

}
type PathParamsType = {
    userId: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')")
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    componentWillUnmount(): void {}

    render() {
        return <Profile  isOwner={!this.props.match.params.userId} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    authorizedUserId: state.auth.userId
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus
    }),
    withRouter, withAuthRedirect)(ProfileContainer)
