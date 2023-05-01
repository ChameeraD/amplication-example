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
        <TextInput label="Publication" source="publication" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
