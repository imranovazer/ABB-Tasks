import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
const CheckoutForm = ({ cart }) => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    deliveryAddress: "",
    mobileNumber: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number().required("Age is required"),
    deliveryAddress: Yup.string().required("Delivery address is required"),
    mobileNumber: Yup.string().required("Mobile number is required"),
  });

  const handleSubmit = (values) => {
    console.log("User data", values);

    console.log("Purchased data ", cart);
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
            />
            <ErrorMessage
              className="text-danger"
              name="firstName"
              component="div"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
            />
            <ErrorMessage
              className="text-danger"
              name="lastName"
              component="div"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <Field className="form-control" type="number" id="age" name="age" />
            <ErrorMessage className="text-danger" name="age" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery address</label>
            <Field
              className="form-control"
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
            />
            <ErrorMessage
              className="text-danger"
              name="deliveryAddress"
              component="div"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile number</label>
            <Field
              className="form-control"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
            />
            <ErrorMessage
              className="text-danger"
              name="mobileNumber"
              component="div"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Checkout
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutForm;
