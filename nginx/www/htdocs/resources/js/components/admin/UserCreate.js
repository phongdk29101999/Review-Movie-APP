import React from 'react';
import { Create, SimpleForm, TextInput, ImageInput } from 'react-admin';

export default function UserCreate(props) {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <ImageInput source='avatar' />
      </SimpleForm>
    </Create>
  )
}
