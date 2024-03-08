import FriendListItem from "./FriendListItem";

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <ul>
      <li>
        <FriendListItem image={avatar} name={name} online={isOnline} />
      </li>
    </ul>
  );
};

export default FriendList;
