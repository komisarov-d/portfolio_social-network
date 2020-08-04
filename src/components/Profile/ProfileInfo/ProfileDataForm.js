import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from '../../common/FormsControls/FormsControls.module.css'


const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save changes</button>
            </div>
            <div>
                {error && <div className={s.requestError}>{error}</div>}
            </div>

            <div>
                <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>lookingForAJob</b>:{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional
                    skills</b>: {createField('Add you skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b> {createField('About me', 'aboutMe', [], Textarea)}
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
const ProfileReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileReduxForm