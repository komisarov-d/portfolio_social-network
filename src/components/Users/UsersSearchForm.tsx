import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/UsersStore/usersReducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type FormTypes = {
    term:string
    friend: 'true' | 'false' | 'null'
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {
    const submit = (values: FormTypes, {setSubmitting}: { setSubmitting: (arg0: boolean) => void }) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanged(filter)

        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (

                <Form>
                    <Field type="text" name="term"/>
                    <Field name='friend' as='select'>
                        <option value='null'>ALL</option>
                        <option value='true'>Only followed</option>
                        <option value='false'>Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
})
export default UsersSearchForm