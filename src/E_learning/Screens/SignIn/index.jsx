import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
class SignInScreen extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
            console.log(values)
        }}
        render={({ handleChange }) => (
          <Form className="w-50 mx-auto">
            <h1>Dang Nhap</h1>
            <div className="form-group">
              <label>Account</label>
              <Field
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field
                type="password"
                className="form-control"
                name="matKhau"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success">Dang Nhap</button>
          </Form>
        )}
      />
    );
  }
}
export default SignInScreen;
