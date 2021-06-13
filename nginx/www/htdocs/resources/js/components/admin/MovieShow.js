import * as React from "react";
import { Show, SimpleShowLayout, TextField, ImageField, DateField, NumberField, RichTextField } from 'react-admin';

export default function PostShow(props) {
  return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='title' />
            <ImageField source='poster' />
            <NumberField source='expert_evaluation' />
            <NumberField source='movie_lenght' />
            <TextField source='director' />
            <DateField source='production_year' />
            <RichTextField source='description' />
        </SimpleShowLayout>
    </Show>
  )
}
