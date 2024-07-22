import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="blogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
