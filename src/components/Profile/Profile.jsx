import MyPosts from "../Profile/My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import p from "./Profile.module.css";
import MyPostsContainer from "./My Posts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
