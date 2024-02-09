import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${
          isOnline ? css.statusOnline : css.statusOffline
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
