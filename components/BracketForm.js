import React from "react";
import { Formik } from "formik";
import BracketFormBody from "./BracketFormBody";

const BracketForm = () => (
  <Formik
    initialValues={{
      name: "",
      description: "",
      competitors: ["Competitor 1", "Competitor 2"]
    }}
    onSubmit={async values => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(JSON.stringify(values));
    }}
  >
    <BracketFormBody />
  </Formik>
);

export default BracketForm;
