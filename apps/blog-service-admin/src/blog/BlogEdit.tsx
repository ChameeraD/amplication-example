import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Name" source="name" />
        <TextInput label="Publication" source="publication" />
        <DateTimeInput label="Published Date" source="publishedDate" />
      </SimpleForm>
    </Edit>
  );
};
