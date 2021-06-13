import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput, ImageInput } from 'react-admin';

export default function MovieCreate(props) {
  return (
    <Create title='Add a Movie' {...props}>
      <SimpleForm>
        <TextInput source='title' fullWidth />
        <ImageInput source='poster' fullWidth />
        <NumberInput source='movie_lenght' fullWidth />
        <TextInput source='director' fullWidth />
        <DateInput source='production_year' fullWidth />
        <NumberInput source='expert_evaluation' fullWidth min={0} max={10} />
        <TextInput multiline source='description' fullWidth />
      </SimpleForm>
    </Create>
  )
}
