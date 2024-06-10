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
        //데이터 파싱
        const parsedData = data.map((item) => ({
          id: item.id,
          title: item.title,
          mode: item.mode,
        }));

        setChatSessions(parsedData); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        setChatSessions(chatSessions_dummy); // 실패 시 더미 데이터로 상태 업데이트
        console.error("Failed to fetch chat sessions:", error);
      }
    };

    fetchChatList();
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시에만 호출되도록 함

  const renameChatSession = async (sessionId, newTitle) => {
    try {
      const response = await fetch(`여기에_백엔드_API_URL_입력/${sessionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", //json 형태로
        },
        body: JSON.stringify({ title: newTitle }), //제목 변경
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedSession = await response.json();
      setChatSessions((currentSessions) =>
        currentSessions.map((session) =>
          session.id === sessionId ? { ...session, title: updatedSession.title } : session
        )
      );
    } catch (error) {
      console.error("Failed to rename chat session:", error);
    }
  };

  const removeChatSession = async (sessionId) => {
    try {
      const response = await fetch(`여기에_백엔드_API_URL_입력/${sessionId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setChatSessions((currentSessions) =>
        currentSessions.filter((session) => session.id !== sessionId)
      );
    } catch (error) {
      console.error("Failed to remove chat session:", error);
    }
  };

  return {
    chatSessions,
    renameChatSession,
    removeChatSession,
  };
};
