import * as React from "react";
import { Show, SimpleShowLayout, TextField, ImageField, NumberField, RichTextField, DateField } from 'react-admin';

export default function PostShow(props) {
  return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='user_name' />
            <TextField source='movie_title' />
            <ImageField source='movie_poster' />
            <NumberField source='rating' />
            <RichTextField source='review_text' />
            <DateField source='updated_at' showTime/>
        </SimpleShowLayout>
    </Show>
  )
}
