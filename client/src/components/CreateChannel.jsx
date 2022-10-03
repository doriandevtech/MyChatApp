import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { UserList } from "./";
import { ClassCreateChannel, CloseCreateChannel } from "../assets";
import { useState } from "react";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
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
  const [channelName, setChannelName] = useState("");

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
      <UserList />
    </div>
  );
}

export default CreateChannel;
