import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

// Define auth options separately
const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account.provider === "github") {
        await connectDb()
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
        }
        return true
      }
      return false
    },

    async session({ session }) {
      await connectDb()
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser?.username || session.user.name
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// Create handler from options
const handler = NextAuth(authOptions)

// Export for App Router (GET and POST)
export { handler as GET, handler as POST }
