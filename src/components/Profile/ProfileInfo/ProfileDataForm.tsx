import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from '../../common/FormsControls/FormsControls.module.css'
import {ProfileType} from "../../../Types/Types";
import {Button} from "antd";


type ProfileFormOwnProps = {
    profile: ProfileType
}
type ProfileTypeKey = GetStringKeys<ProfileType>
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileFormOwnProps> & ProfileFormOwnProps> = ({profile, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Button onClick={handleSubmit}>Save changes</Button>
            </div>
            <div>
                {error && <div className={s.requestError}>{error}</div>}
            </div>

            <div>
                <b>Full name</b>: {createField<ProfileTypeKey>('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>lookingForAJob</b>:{createField<ProfileTypeKey>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional
                    skills</b>: {createField<ProfileTypeKey>('Add you skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b> {createField<ProfileTypeKey>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}</b>{createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}
            </div>
        </form>
    )
}
const ReduxPostForm = reduxForm<ProfileType, ProfileFormOwnProps>({
    form: 'Profile-data-form'
})(ProfileDataForm)

export default ReduxPostForm