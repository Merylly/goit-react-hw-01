import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileInfoWrapper}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Followers</span>
          <span className={css.profileItemText}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Views</span>
          <span className={css.profileItemText}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Likes</span>
          <span className={css.profileItemText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
