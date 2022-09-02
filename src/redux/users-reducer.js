const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Alex",
      status: "I'am a boss",
      location: { city: "Tallin", country: "Estonia" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Alexey",
      status: "I am the master of games",
      location: { city: "Tallin", country: "Estonia" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Andrew",
      status: "I like react",
      location: { city: "Minsk", country: "Belarus" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      let stateCopy = {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:

    default:
      return state;
  }
};

export const followAC = (userId) => {
  {
    type: FOLLOW, userId;
  }
};
export const unfollowAC = (userId) => {
  {
    type: UNFOLLOW, userId;
  }
};

export default usersReducer;
