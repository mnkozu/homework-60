import React from 'react';
import {MessagesType} from "../../types";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
  messages: MessagesType[];
}

const Chat: React.FC<Props> = ({messages}) => {
  return (
    <>
      {messages.map(message => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={message._id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={message.author}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  {message.message}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </>
  );
};

export default Chat;