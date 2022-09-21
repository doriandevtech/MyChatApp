import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelListContainer, ChannelContainer, Auth } from "./components";

import "./App.css";

const cookies = new Cookies();

const apiKey = "7ev8a43bvzm5";

const client = StreamChat.getInstance(apiKey);

const authToken = cookies.get("token");

if (authToken) {
  client.connectUser({
    token: cookies.get("token"),
    username: cookies.get("username"),
    fullName: cookies.get("fullName"),
    userId: cookies.get("userId"),
    phoneNumber: cookies.get("phoneNumber"),
    avatarURL: cookies.get("avatarURL"),
    hashedPassword: cookies.get("hashedPassword"),
  });
}

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
