import * as React from "react";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import { reduxForm} from "redux-form";


const maxLength100 = maxLengthCreator(100)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Post message', 'postTitle', [required, maxLength100], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}
const ReduxPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(PostForm)
export default ReduxPostForm