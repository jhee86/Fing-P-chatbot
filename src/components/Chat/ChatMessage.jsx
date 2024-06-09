import React from "react";
import { Avatar, Box, Typography, Paper, Link } from "@mui/material";

const ChatMessage = ({ message }) => {
  const { avatar, text, timestamp, source } = message;

  return (
    <Box display="flex" mb={2}>
      <Avatar src={avatar} alt="avatar" sx={{ width: 56, height: 56 }} />
      <Box ml={2} flexGrow={1}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            {timestamp}
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{ p: 2, borderRadius: 2, bgcolor: "#E0E0E0", mt: 1 }}
        >
          <Typography>{text}</Typography>
          {source && (
            <Box mt={1}>
              <Typography variant="subtitle2" color="textSecondary">
                출처
              </Typography>
              <Link href={source.url} target="_blank" rel="noopener">
                {source.label}
              </Link>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatMessage;
