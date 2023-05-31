import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PublicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
