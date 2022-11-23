import React from 'react';

interface Props {
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const NewMessageForm: React.FC<Props> = ({onChanges, onAdd}) => {
  return (
    <form onSubmit={onAdd}>
      <input type="text" name="message" onChange={e => onChanges(e)} placeholder="message"/>
      <input type="text" name="author" onChange={e => onChanges(e)} placeholder="author"/>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewMessageForm;