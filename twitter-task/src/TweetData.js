// TweetData.js: Test Data for Tweets

var tweetArr = [
  {
    tweetLogoImage: 'mui_logo.jpg',
    name: 'Material-UI',
    tag: '@MaterialUI',
    time: 'Dec 8',
    replyTo: '',

    message: `v1.0.0-beta.23 is out!<br>
      - The TypeScript definitions keep getting better.<br>
      - We keep investing in improving the documentation. For instance, you can find a CodeSandbox edit button on all our demos.<br>
      - And much more.`,

    tweetLink: {
      image: 'mui_logo.jpg',
      title: 'mui-org/materal-ui',
      text: `material-ui - React components that implement Google's Material Design`,
      site: 'github.com',
    },

    replies: 3,
    retweets: 5,
    likes: 5,
  },

  {
    tweetLogoImage: 'dan_abramov.jpg',
    name: 'Dan Abramov',
    tag: '@dan_abramov',
    time: 'Dec 8',
    replyTo: '',

    message: `Ever had tests hang in an infinite loop that is annoying
      to debug? Inspired by @amasad’s blog Tweet, here’s how I want to catch this in our tests:`,

    tweetLink: {
      image: 'dan_abramov.jpg',
      title: '[RFC] Add a test-only transform to catch infinite io...',
      text: `I took @amasad's code from https://repl.it/site/blog/infinite-loops
        and decided to try it out. It's pretty neat. This makes the tests throw when`,
      site: 'github.com',
    },

    replies: 2,
    retweets: 12,
    likes: 64,
  },

  {
    tweetLogoImage: 'henry_zhu.jpg',
    name: 'Henry Zhu‏',
    tag: '@left_pad',
    time: 'Dec 8',
    replyTo: '',

    message: `Replying to @left_pad @babeljs @angustweets<br>
    oh and now Angus is a Babel team member, so congrats! 🙌 (that's how open source is done folks 😂), you can take over for me now
    `,

    tweetLink: {
      image: '',
      title: '',
      text: ``,
      site: '',
    },

    replies: 1,
    retweets: 1,
    likes: 7,
  },

  {
    tweetLogoImage: 'react.png',
    name: 'React',
    tag: '@reactjs',
    time: 'Dec 7',
    replyTo: '',

    message: `We’re adopting an RFC process inspired by @yarnpkg, @emberjs, and @rustlang!`,

    tweetLink: {
      image: 'rfc.jpeg',
      title: 'Introducing the React RFC Process - React Blog',
      text: `We're adopting an RFC ('request for comments') process for
      contributing ideas to React inspired by Yarn, Ember, and Rust,
      the goal is to allow Rect core team members... `,
      site: 'reactjs.org',
    },

    replies: 4,
    retweets: 199,
    likes: 584,
  },

  {
    tweetLogoImage: 'sean_larkin.jpg',
    name: 'Sean Thomas Larkin‏ ',
    tag: '@TheLarkInn',
    time: 'Dec 5',
    replyTo: '',

    message: `More Sean Thomas Larkin Retweeted Jeremy Gayed
    Sustainable projects thrive. Much of this is thanks to funding and helping
    support our contributor ecosystem. http://opencollective.com/webpack <br><br>

    Go to your favorite project (webpack, @babeljs, @vuejs, @preact, etc.) and
    choose their @opencollect account. Double down on your investment.
    Sean Thomas Larkin added, Jeremy Gayed`,

    tweetLink: {
      image: '',
      title: 'Jeremy Gayed 🤓 @tizmagik',
      text: `Some really awesome things on the horizon for Webpack!
      This team is 🔥 💪 https://twitter.com/thelarkinn/status/937777635626688512 …`,
      site: '',
    },

    replies: 0,
    retweets: 7,
    likes: 34,
  },

  /* template for additional tweet data
  {
    tweetLogoImage: '.jpg',
    name: '',
    tag: '',
    time: '1d',
    replyTo: '',

    message: ``,

    tweetLink: {
      image: '.jpg',
      title: '',
      text: ``,
      site: ''
    },

    replies: 0,
    retweets: 0,
    likes: 0
  },
  */

];

export default tweetArr;
