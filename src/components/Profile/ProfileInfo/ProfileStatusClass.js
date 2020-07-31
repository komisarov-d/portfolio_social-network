import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    editModeOn = () => {
        this.setState({
            editMode:true
        })
    }
    editModeOff = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    statusHandler = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevProps.status !== this.props.status){
           this.setState({
               status: this.props.status
           })
       }
    }

    render() {

        if (!this.state.editMode) {
            return <div
                onDoubleClick={ this.editModeOn}>{this.props.status ? this.props.status : 'Status are empty'}</div>
        }

        if (this.state.editMode) {
            return (
                <form >
                    <input
                        onBlur={ this.editModeOff}
                        autoFocus={true}
                        type="text"
                        onChange={this.statusHandler}
                        value={this.state.status}
                    />
                </form>
            );
        }
    }
}

export default ProfileStatus