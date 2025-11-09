# StartupHub - Collaborative Startup Platform

A modern web application where startup founders can discuss ideas, share solutions, and network with like-minded entrepreneurs.

## Features

- **User Authentication**: Secure sign up and login using Firebase Authentication
- **Startup Ideas Posting**: Create and share your startup ideas
- **Discussion Forum**: Engage in discussions about startup ideas
- **Admin Dashboard**: View all users and manage the platform
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly interface
- **Real-time Database**: Firebase Firestore for data storage

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend/Auth**: Firebase (Authentication & Firestore)
- **Hosting**: Vercel
- **Database**: Firebase Firestore

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Firebase account
- Vercel account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/startup-hub.git
   cd startup-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Get your Firebase config from Project Settings

4. Create `.env.local` file:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
startup-hub/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx        # Login page
│   │   └── signup/page.tsx       # Sign up page
│   ├── admin/
│   │   └── dashboard/page.tsx    # Admin dashboard
│   └── page.tsx                  # Home page
├── lib/
│   └── firebase.ts               # Firebase configuration
├── public/
├── .env.local                    # Environment variables
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

## Database Schema

### Users Collection
```json
{
  "uid": "unique_user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-11-09T...",
  "isAdmin": false
}
```

## Authentication Routes

- **Sign Up**: `/auth/signup` - Create new account
- **Login**: `/auth/login` - Login to existing account
- **Admin Dashboard**: `/admin/dashboard` - View all users (requires authentication)

## Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project" and select your repository

4. Add environment variables from your `.env.local`

5. Deploy!

## Features to Add

- [ ] Create startup ideas posting
- [ ] Discussion threads for each idea
- [ ] Upvoting/liking system
- [ ] User profiles
- [ ] Search functionality
- [ ] Categories for ideas
- [ ] Notifications system
- [ ] Direct messaging between users
- [ ] Email notifications
- [ ] Advanced analytics for admin

## Contributing

Fork the repository and create a pull request with your changes.

## License

MIT License - feel free to use this project for your needs.

## Support

For questions or issues, please open an issue on GitHub.
