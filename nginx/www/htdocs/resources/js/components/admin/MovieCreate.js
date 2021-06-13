import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput, ImageInput } from 'react-admin';

export default function MovieCreate(props) {
  return (
    <Create title='Add a Movie' {...props}>
      <SimpleForm>
        <TextInput source='title' fullWidth />
        <TextInput source='poster_path' fullWidth />
        <TextInput source='backdrop_path' fullWidth />
        <NumberInput source='runtime' fullWidth />
        <DateInput source='release_date' fullWidth />
        <NumberInput source='vote_average' fullWidth min={0} max={10}/>
        <TextInput multiline source='overview' fullWidth />
      </SimpleForm>
    </Create>
  )
}
