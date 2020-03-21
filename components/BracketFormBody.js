import React from "react";
import { View, Button } from "react-native";
import { useFormikContext } from "formik";
import FormTextInput from "./FormTextInput";
import ArrayInput from "./ArrayInput";

const BracketFormBody = () => {
  const { submitForm, values } = useFormikContext();

  const addCompetitor = helpers => {
    helpers.push("");
  };

  const removeCompetitor = helpers => {
    if (values.competitors.length > 2) {
      helpers.pop("");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <View style={{ width: 300 }}>
        <FormTextInput fieldName="name" placeholder="Name" />
        <FormTextInput fieldName="description" placeholder="Description" />
        <ArrayInput
          arrayName="competitors"
          placeholderName="Competitor"
          addItem={helpers => addCompetitor(helpers)}
          removeItem={helpers => removeCompetitor(helpers)}
        />
      </View>
      <Button onPress={submitForm} title="Submit" />
    </View>
  );
};

export default BracketFormBody;
