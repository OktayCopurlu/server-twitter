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
      const tweets = await Tweet.find({ user }).populate({
        path: "user",
        model: "Tweet",
      });
      return tweets;
    },
    deleteTweet: async (_, { _id }, { Tweet }) => {
      await Tweet.findOneAndRemove({ _id });
      return console.log("tweet was deleted...");
    },

  },
  Mutation: {
    createTweet: async (_, { title, user, text, images }, { Tweet }) => {
      const newTweet = await new Tweet({
        title,
        user,
        text,
        images,
      }).save();
      return newTweet;
    },
    createUser: async (_, { username, email, password, image }, { User }) => {
      const newUser = await new User({
        username,
        email,
        password,
        image,
      }).save();
      return newUser;
    },
    addLike: async (_, { _id, likes, likedUser }, { Tweet }) => {
      let like = likes;
      const tweet = await Tweet.find({ _id });
      if (tweet[0].likedUser.length > 0) {
        tweet[0].likedUser.forEach((id) => {
          if (id === likedUser) {
            like--;
          } else like++;
        });
      } else like++;
      const updatedTweet = await Tweet.findOneAndUpdate(
        { _id },
        { likes: like, likedUser }
      );
      return updatedTweet;
    },
  },
};
