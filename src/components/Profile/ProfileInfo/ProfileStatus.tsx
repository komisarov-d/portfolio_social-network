import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatusSelector} from "../../../redux/ProfileStore/profileSelectors";
import {updateStatus} from "../../../redux/ProfileStore/profileReducer";

const ProfileStatus: React.FC = (props) => {
const userStatus = useSelector(getStatusSelector)
    const dispatch = useDispatch()
    let [editMode, toggleMode] = useState(false)
    let [status, setStatus] = useState(userStatus)
    useEffect(() => {
        setStatus(userStatus)
    }, [userStatus])
    const activateEditMode = () => {
        toggleMode(true)
    }
    const deactivateEditMode = () => {
        toggleMode(false)
        dispatch(updateStatus(status))
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                {!editMode &&
                <div>
                    <b>Status: </b> <span onDoubleClick={activateEditMode}>{userStatus || "-------"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                }
            </div>

        );
}
export default ProfileStatus
