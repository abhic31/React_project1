import robopic from '../assets/robot.jpeg'
import userpic from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {

  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={robopic} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={userpic} className="chat-message-profile" />
      )}
    </div>
  );
}