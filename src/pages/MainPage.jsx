// import { Route, Routes } from 'react-router-dom';
import SideBar from "../components/Layout/SideBar";
import ChatSessionButton from "../components/Layout/ChatSessionButton";
import InputBar from "../components/Input/Input";

const MainPage = () => {
  return (
    <div>
      <SideBar>
        <ChatSessionButton title="Chat 1" />
        <ChatSessionButton title="Chat 2" />
        <ChatSessionButton title="Chat 3" />
      </SideBar>
      <h2>Home</h2>
      <InputBar />
    </div>
  );
};

export default MainPage;
