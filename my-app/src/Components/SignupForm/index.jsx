import React from 'react';

 import { Formik, Field, Form } from 'formik';
 /*
 const SignupForm = () => (
   <Formik>
     initialValues={{ login: '', pswd: ''}} 
     onSubmit={console.log(JSON.stringify(values))}
     <Form>
       <Field name="login" placeholder="login"></Field>
       <Field name="pswd" placeholder="password"></Field>
       <button type="submit">Submit</button>
     </Form>
   </Formik>
 )
 */
 const SignupForm = () => (
   <div>
     <h1>Sign Up</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       onSubmit={async (values) => {
         await new Promise((r) => setTimeout(r, 500));
         console.log(JSON.stringify(values, null, 2));
       }}
     >
       <Form>
         <label htmlFor="firstName">First Name</label>
         <Field id="firstName" name="firstName" p
         laceholder="Jane" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field id="lastName" name="lastName" placeholder="Doe" />
 
         <label htmlFor="email">Email</label>
         <Field
           id="email"
           name="email"
           placeholder="jane@acme.com"
           type="email"
         />
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </div>
 );
 
 export default SignupForm;