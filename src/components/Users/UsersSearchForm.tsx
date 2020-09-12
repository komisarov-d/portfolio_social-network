import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/UsersStore/usersReducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/UsersStore/usersSelectors";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type FriendFormType = 'true' | 'false' | 'null'
type FormTypes = {
    term:string
    friend: FriendFormType
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {

    const filter = useSelector(getUsersFilter)

    const submit = (values: FormTypes, {setSubmitting}: { setSubmitting: (arg0: boolean) => void }) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        onFilterChanged(filter)

        setSubmitting(false)
    }
    return (
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
})
export default UsersSearchForm