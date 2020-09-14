import React, {FC} from "react";
import {useFormik} from "formik";
import {Input} from "antd";


const LoginLayout: FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
console.log(values)
        },
    });

    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password">Password</label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button>Send</button>
            </form>

        </div>
    )

}
export default LoginLayout