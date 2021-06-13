import * as React from "react";
import { Show, SimpleShowLayout, TextField, ImageField, DateField, NumberField, RichTextField } from 'react-admin';

export default function PostShow(props) {
  return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='title' />
            <ImageField source='poster_path' />
            <ImageField source='backdrop_path' />
            <NumberField source='vote_average' />
            <NumberField source='runtime' />
            <DateField source='release_date' />
            <RichTextField source='overview' />
        </SimpleShowLayout>
    </Show>
  )
}
