import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ImageInput, NumberInput } from 'react-admin';

export default function MovieEdit(props) {
  return (
    <Edit title='Edit Movie' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' fullWidth />
        <TextInput source='title' fullWidth />
        <ImageInput source='poster' fullWidth />
        <NumberInput source='movie_lenght' fullWidth />
        <TextInput source='director' fullWidth />
        <DateInput source='production_year' fullWidth />
        <NumberInput source='expert_evaluation' fullWidth min={0} max={10}/>
        <TextInput multiline source='description' fullWidth />
      </SimpleForm>
    </Edit>
  )
}
