import React from "react";
import {connect} from "react-redux";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    return(
        <Dialogs/>
    )
}
const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)