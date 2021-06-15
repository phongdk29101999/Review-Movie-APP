import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  DateField
} from 'react-admin';

export default function MovieList(props) {

  return (
    <List {...props}>
      <Datagrid>
        <TextField source='movie_title' />
        <TextField source='user_name' />
        <TextField source='rating' />
        <RichTextField source='review_text' />
        <DateField source='updated_at' showTime/>
        <EditButton basePath='/reviews' />
        <DeleteButton basePath='/reviews' />
        <ShowButton basePath="/reviews" label="Show" record={props} />
      </Datagrid>
    </List>
  )
}
