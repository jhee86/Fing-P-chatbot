import { useContext, useEffect } from "react";
import { ChatSessionContext } from "../provider/ChatSessionContext";

const useChatSession = (sessionId) => {
  const { state, dispatch } = useContext(ChatSessionContext);

  useEffect(() => {
    const fetchChatSession = async () => {
      try {
        const response = await fetch(`/chatbot/chatting/${sessionId}`);
        const data = await response.json();
        const parsedMessages = data.map((message) => ({
          id: message.id,
          question: message.question,
          answer: message.answer,
          createdAt: message.createdAt,
          myFeedback: message.myFeedback,
          source: Object.values(message.source), // 객체의 값들을 배열로 변환
        }));

        dispatch({
          type: "SET_SESSION",
          payload: {
            session: sessionId,
            messages: data.parsedMessages,
          },
        });
      } catch (error) {
        console.error("Failed to fetch chat session:", error);
      }
    };

    if (sessionId) {
      fetchChatSession();
    }
  }, [sessionId, dispatch]);

  return {
    currentSession: state.currentSession,
    messages: state.messages,
  };
};

export default useChatSession;
