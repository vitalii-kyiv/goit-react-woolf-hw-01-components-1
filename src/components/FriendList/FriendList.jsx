import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, ...friend }) => (
      <FriendListItem key={id} {...friend} />
    ))}
  </ul>
);

export default FriendList;
