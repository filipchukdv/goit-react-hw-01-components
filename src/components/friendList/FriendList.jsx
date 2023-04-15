import css from './FriendList.module.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = { friends: PropTypes.array.isRequired };

export default FriendList;
