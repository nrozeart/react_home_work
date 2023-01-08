import { ChatList } from '../ChatList/ChatList';
import { MessageField } from '../MessageField/MessageField';

export const Chatspage = ({ chatId }) => {
  return (
    <div className="container">
      <h3>Chat room {chatId}</h3>
      <div className="communication-block">
        <ChatList chatId={chatId} />
        <MessageField />
      </div>
    </div>
  );
};
