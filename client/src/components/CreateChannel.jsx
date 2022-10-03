import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { UserList } from "./";
import { ClassCreateChannel, CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const [channelName, setChannelName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name"
      />
      <p>Add Members</p>
    </div>
  );
};

function CreateChannel({ createType, setIsCreating }) {
  const { client, setActiveChannel } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ""]);
  const [channelName, setChannelName] = useState("");

  const createChannel = async (e) => {
    e.preventDefault();

    try {
      const newChannel = await client.channel(createType);
    } catch (error) {}
  };

  return (
    <div className="create-channel__conatainer">
      <div className="create_channel__header">
        <p>
          {createType === "team"
            ? "Create a New Channel"
            : "Send a direct message"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div
        className="create-channel__button-wrapper"
        onClick={createChannelFunction}
      >
        <p>
          {createType === "team" ? "Create Channel" : "Create Message Group"}
        </p>
      </div>
    </div>
  );
}

export default CreateChannel;
