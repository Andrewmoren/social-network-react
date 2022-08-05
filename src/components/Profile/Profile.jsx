import MyPosts from "../Profile/My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import p from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
