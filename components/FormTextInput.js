import React from "react";
import { TextInput } from "react-native";
import { useField } from "formik";

const FormTextInput = ({ fieldName, ...props }) => {
  const [field] = useField(fieldName);
  return (
    <TextInput
      style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
      value={field.value}
      onChangeText={field.onChange(fieldName)}
      //   onBlur={field.onBlur(fieldName)}
      {...props}
    />
  );
};

export default FormTextInput;
