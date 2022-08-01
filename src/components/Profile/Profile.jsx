import MyPosts from "../Profile/My Posts/MyPosts";
import prof from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
