import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Author" source="author" />
        <TextInput label="Content" source="content" />
        <TextInput label="Publication" source="publication" />
        <TextInput label="Published At" source="publishedAt" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
