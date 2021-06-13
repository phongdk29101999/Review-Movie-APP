import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput } from 'react-admin';

export default function UserEdit(props) {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <ImageInput source='avatar' />
      </SimpleForm>
    </Edit>
  )
}
