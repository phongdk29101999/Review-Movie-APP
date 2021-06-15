import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput, NumberInput } from 'react-admin';

export default function MovieEdit(props) {
  return (
    <Edit title='Edit Movie' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' fullWidth />
        <TextInput disabled source='user_name' fullWidth />
        <TextInput disabled source='movie_title' fullWidth />
        <ImageInput disabled source='movie_poster' fullWidth />
        <NumberInput source='rating' fullWidth min={0} max={10}/>
        <TextInput multiline source='review_text' fullWidth />
      </SimpleForm>
    </Edit>
  )
}
