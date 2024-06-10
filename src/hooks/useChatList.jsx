import { useState, useEffect } from "react";

export const useChatList = () => {
  const userId = 1;
  const [chatSessions, setChatSessions] = useState([]);

  const chatSessions_dummy = [
    { id: 0, title: "Chat 1", mode: "live" },
    { id: 1, title: "Chat 2", mode: "live" },
    { id: 2, title: "Chat 3", mode: "FAQ" },
  ];

  useEffect(() => {
    // 백엔드 API 호출
    const fetchChatList = async () => {
      try {
        const response = await fetch("여기에_백엔드_API_URL_입력");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChatSessions(data); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        setChatSessions(chatSessions_dummy); // 실패 시 더미 데이터로 상태 업데이트
        console.error("Failed to fetch chat sessions:", error);
      }
    };

    fetchChatList();
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시에만 호출되도록 함

  const renameChatSession = (sessionId, newTitle) => {
    // 백엔드 API 호출
    setChatSessions((currentSessions) =>
      currentSessions.map((session) =>
        session.id === sessionId ? { ...session, title: newTitle } : session
      )
    );
  };

  const removeChatSession = (sessionId) => {
    // 백엔드 호출
    setChatSessions((currentSessions) =>
      currentSessions.map((session) =>
        currentSessions.filter((session) => session.id !== sessionId)
      )
    );
  };

  return {
    chatSessions,
    renameChatSession,
    removeChatSession,
  };
};
