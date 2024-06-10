import React, { createContext, useReducer } from "react";

const ChatSessionContext = createContext();

const initialState = {
  currentSession: null,
  messages: [],
};

const chatSessionReducer = (state, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return {
        ...state,
        currentSession: action.payload.session,
        messages: action.payload.messages,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

const ChatSessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatSessionReducer, initialState);

  return (
    <ChatSessionContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatSessionContext.Provider>
  );
};

export { ChatSessionContext, ChatSessionProvider };
