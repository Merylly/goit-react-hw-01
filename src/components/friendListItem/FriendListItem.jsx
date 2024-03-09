import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  const isOnline = friend.isOnline === true;
  return (
    <div>
      <img
        className={css.friendListItemImage}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendListItemTitle}>{friend.name}</p>
      <p
        className={clsx(css.friendListItemText, {
          [css.online]: isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
