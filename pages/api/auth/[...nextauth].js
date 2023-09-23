import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import EmailProvider from "next-auth/providers/email";
// import nodemailer from "nodemailer";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   // server: process.env.EMAIL_SERVER,
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const isAllowedToSignIn = true;
  //     if (isAllowedToSignIn) {
  //       return true;
  //     } else {
  //       // Return false to display a default error message
  //       return false;
  //       // Or you can return a URL to redirect to:
  //       // return '/unauthorized'
  //     }
  //   },
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs
  //     if (url.startsWith("/")) return `${baseUrl}${url}`;
  //     // Allows callback URLs on the same origin
  //     else if (new URL(url).origin === baseUrl) return url;
  //     return baseUrl;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.accessToken = token.accessToken;
  //     session.user.id = token.id;

  //     return session;
  //   },
  //   async jwt({ token, account, profile, isNewUser }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //     }
  //     return token;
  //   },
  // },

  // session: {
  //   // Choose how you want to save the user session.
  //   // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
  //   // If you use an `adapter` however, we default it to `"database"` instead.
  //   // You can still force a JWT session by explicitly defining `"jwt"`.
  //   // When using `"database"`, the session cookie will only contain a `sessionToken` value,
  //   // which is used to look up the session in the database.
  //   strategy: "database",

  //   // Seconds - How long until an idle session expires and is no longer valid.
  //   maxAge: 30 * 24 * 60 * 60, // 30 days

  //   // Seconds - Throttle how frequently to write to database to extend a session.
  //   // Use it to limit write operations. Set to 0 to always update the database.
  //   // Note: This option is ignored if using JSON Web Tokens
  //   updateAge: 24 * 60 * 60, // 24 hours

  //   // The session token is usually either a random UUID or string, however if you
  //   // need a more customized session token string, you can define your own generate function.
  //   generateSessionToken: () => {
  //     return randomUUID?.() ?? randomBytes(32).toString("hex");
  //   },
  // },
  // events: {
  //   async signIn(message) {
  //     /* on successful sign in */
  //   },
  //   async signOut(message) {
  //     /* on signout */
  //   },
  //   async createUser(message) {
  //     /* user created */
  //   },
  //   async updateUser(message) {
  //     /* user updated - e.g. their email was verified */
  //   },
  //   async linkAccount(message) {
  //     /* account (e.g. Twitter) linked to a user */
  //   },
  //   async session(message) {
  //     /* session is active */
  //   },
  // },
});
