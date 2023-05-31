import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PublicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
