import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AutherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Bio" source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
