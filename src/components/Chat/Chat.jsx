import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ChatMessage from "./ChatMessage";

const messages = [
  {
    avatar: "https://via.placeholder.com/56",
    text: "Hello, how can I help you?",
    timestamp: "10:25 PM",
  },
  {
    avatar: "https://via.placeholder.com/56",
    text: "Can you tell me more about your services?",
    timestamp: "10:26 PM",
  },
  {
    avatar: "https://via.placeholder.com/56",
    text: "Sure, we offer a variety of services including...",
    timestamp: "10:27 PM",
    source: { label: "https://www.skk.ac.kr", url: "https://www.skk.ac.kr" },
  },
];

const Chat = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </Box>
    </Container>
  );
};

export default Chat;
