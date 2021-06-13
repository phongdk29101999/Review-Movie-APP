import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ImageInput, NumberInput } from 'react-admin';

export default function MovieEdit(props) {
  return (
    <Edit title='Edit Movie' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' fullWidth />
        <TextInput source='title' fullWidth />
        <ImageInput source='poster_path' fullWidth />
        <ImageInput source='backdrop_path' fullWidth />
        <NumberInput source='runtime' fullWidth />
        <DateInput source='release_date' fullWidth />
        <NumberInput source='vote_average' fullWidth min={0} max={10}/>
        <TextInput multiline source='overview' fullWidth />
      </SimpleForm>
    </Edit>
  )
}
