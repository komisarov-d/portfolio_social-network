import React, {useEffect, useState} from "react";


const ProfileStatusHooks = (props) => {

    const [editMode, toggleMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const onStatusChange = (e) => {
        setStatus(e.current.value)
        props.updateStatus(status)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    if (!editMode) {
        return <div
            onDoubleClick={toggleMode(true)}>{props.status ? props.status : 'Status are empty'}</div>
    }

    if (editMode) {
        return (
            <form>
                <input
                    onBlur={toggleMode(false)}
                    autoFocus={true}
                    type="text"
                    onChange={onStatusChange}
                    value={status}
                />
            </form>
        );
    }
}

export default ProfileStatusHooks