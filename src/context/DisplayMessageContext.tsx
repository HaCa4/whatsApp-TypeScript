import React, { createContext, useState } from "react";

type MessageListType = {
  messageList: string[] | null;
  setMessageList: React.Dispatch<React.SetStateAction<string[] | null>>;
};

export const DisplayMessageContext = createContext<MessageListType | null>(null);

type DisplayMessageContextProviderProps = {
  children: React.ReactNode;
};

export const DisplayMessageContextProvider = ({ children }: DisplayMessageContextProviderProps) => {
  const [messageList, setMessageList] = useState<string[] | null>(null);
  return (
    <DisplayMessageContext.Provider value={{ messageList, setMessageList }}>
      {children}
    </DisplayMessageContext.Provider>
  );
};
