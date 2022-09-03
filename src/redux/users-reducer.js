const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://images.mubicdn.net/images/cast_member/24666/cache-194236-1610749412/image-w856.jpg?size=80x",
    //   followed: false,
    //   fullName: "Alex",
    //   status: "I'am a boss",
    //   location: { city: "Tallin", country: "Estonia" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://images.mubicdn.net/images/cast_member/24666/cache-194236-1610749412/image-w856.jpg?size=80x",
    //   followed: true,
    //   fullName: "Alexey",
    //   status: "I am the master of games",
    //   location: { city: "Astravets", country: "Estonia" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://images.mubicdn.net/images/cast_member/24666/cache-194236-1610749412/image-w856.jpg?size=100x",
    //   followed: false,
    //   fullName: "Andrew",
    //   status: "I like react",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsersAC = (user) => {
  return {
    type: SET_USERS,
    user,
  };
};

export default usersReducer;
