import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {

    const [editMode, toggleMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        toggleMode(true)
    }
    const deactivateEditMode = () => {
        toggleMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    if (!editMode) {
        return <div
            onDoubleClick={activateEditMode}><b>Status:</b>{props.status ? props.status : 'Status are empty'}</div>
    }
    if (editMode) {
        return (
            <div>
                <form>
                    <input
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        type="text"
                        onChange={onStatusChange}
                        value={status}
                    />
                </form>
            </div>
        );
    }
}

export default ProfileStatus