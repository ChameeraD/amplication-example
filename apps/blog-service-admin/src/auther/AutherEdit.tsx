import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AutherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Bio" source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
