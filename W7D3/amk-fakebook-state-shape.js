{
  entities: {
    users: {
      1: {
        id: 1,
        first_name: '',
        last_name: '',
        profile_pic: ''
      }
    },
    friends: {
      1: {
        id: 1,
        user_id: #,
        friend_id: #
      }
    },
    posts: {
      1: {
        id: 1,
        user_id: 1,
        body: #,
        // images: ['.jpg', '.gif'],
        likes: #,
        shares: #
      }
    },
    comments: {
      1: {
        id: 1,
        user_id: #,
        post_id: #,
        body: #,
        likes: #,
        shares: #
      }
    }
  },
  ui: {
    loading: Boolean
  },
  errors: {
    login: ["Incorrect username/password combination"]
  },
  session: {
    id: #,
    current_user: '',
    profile_pic: '.jpg',
    session_token: ''
  }
}
