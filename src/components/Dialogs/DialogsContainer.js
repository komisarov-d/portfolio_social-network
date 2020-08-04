import React from "react";
import {connect} from "react-redux";

import Dialogs from "./Dialogs";
import {sendMessage} from "../../redux/DialogStore/dialogsReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

const DialogsContainer = (props) => {

    return(
        <Dialogs {...props}/>
    )
}
const mapStateToProps = (state) => {
  return{
      dialogs : state.dialogs.dialogs,
      users: state.dialogs.users
  }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(DialogsContainer)