import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Basic from './Basic';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Calculator from './calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
);

function TestComponent() {
  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: 'blue' }}>This is test</h1>
      <Formik
        initialValues={{ "age": 0, "name": "" }}
        validate={values => {
          const errors = {};
          if (values.age < 20) {
            errors.age = "Age should be greater than 20";
          }
          if (values.name === "") {
            errors.name = "Name is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400)
        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <div>
                <h1>Formik Example</h1>
                <Form>
                  <Field name="age" type="number"/>
                  <ErrorMessage name='age' component='div' style={{ color: 'red' }}/>
                  <Field name="name" type="text"/>
                  <ErrorMessage name='name' component='h1' />
                  <button type='submit' disabled={isSubmitting}>Submit</button>
                </Form>
                {/* <form onSubmit={handleSubmit}>
                  <input 
                  type='number'
                  name='age'
                  value={values.age}
                  onChange={handleChange}/>
                  <br/>
                  <b>{errors.age}</b>
                  <br/>
                  <input 
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}/>
                  <br/>
                  <b>{errors.name}</b>
                  <br/>
                  <button type='submit' disabled={isSubmitting}>Submit</button>
                </form> */}
              </div>
            )
          }
        }

      </Formik>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
