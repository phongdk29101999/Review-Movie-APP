import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField
} from 'react-admin';

export default function MovieList(props) {
  
  const MovieFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
  );

  return (
    <List {...props} filters={<MovieFilter />}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='vote_average' />
        <RichTextField source='overview' />
        <EditButton basePath='/movies' />
        <DeleteButton basePath='/movies' />
        <ShowButton basePath="/movies" label="Show" record={props} />
      </Datagrid>
    </List>
  )
}
