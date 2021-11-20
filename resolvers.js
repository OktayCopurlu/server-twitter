export const resolvers = {
  Query: {
    getUsers: async (_, args, { User }) => {
      const users = await User.find();
      return users;
    },
    getTweets: async (_, args, { Tweet }) => {
      const tweets = await Tweet.find();
      return tweets;
    },
    getUserTweets: async (_, { user }, { Tweet }) => {
      const tweets = await Tweet.find({user}).populate({
        path: "user",
        model: "Tweet"
      });
      return tweets;
    },
  },
  Mutation: {
    createTweet: async (_, { title, user, text, parentTweet }, { Tweet }) => {
      const newTweet = await new Tweet({
        title,
        user: user,
        text,
        parentTweet,
      }).save();
      return newTweet;
    },
    createUser: async (_, { username, email, password }, { User }) => {
      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return newUser;
    },
  },
};
