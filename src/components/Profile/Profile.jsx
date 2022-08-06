import MyPosts from "../Profile/My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import p from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
