import React from 'react';
import {Button, TextField} from "@mui/material";

interface Props {
  onChanges: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAdd: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const NewMessageForm: React.FC<Props> = ({onChanges, onAdd}) => {
  return (
      <form onSubmit={onAdd}>
      <TextField
        type="text"
        name="message"
        onChange={e => onChanges(e)}
        id="filled-basic"
        label="Message"
        variant="filled"
        size="small"
      />
      <TextField
        type="text"
        name="author"
        onChange={e => onChanges(e)}
        id="filled-basic"
        label="Author"
        variant="filled"
        size="small"
      />
      <Button type="submit" variant="contained" size="large">Add</Button>
    </form>

);
};

export default NewMessageForm;