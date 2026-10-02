# 🎬 CineVerse - Your Personal Movie Universe

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> **CineVerse** is a modern, cinematic web application where movie enthusiasts can discover, save, and manage their favorite films and shows. With an intuitive interface, user authentication, and an immersive design, CineVerse transforms how you experience cinema.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication Flow](#authentication-flow)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Styling](#styling)
- [Local Storage Data Structure](#local-storage-data-structure)
- [How It Works](#how-it-works)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## ✨ Features

### Core Features
- ✅ **User Authentication**
  - Registration with email and password
  - Login with credential validation
  - Remember me functionality
  - Session management
  
- ✅ **Movie Discovery**
  - Browse trending movies and shows
  - Search functionality
  - Movie details and information
  - Responsive grid layout

- ✅ **Save Favorites**
  - Save movies to personal collection
  - Manage saved movies
  - Quick access to favorites

- ✅ **Interactive UI**
  - Smooth animations with Framer Motion
  - Responsive design for all devices
  - Dark theme with cinematic aesthetics
  - Interactive movie chatbot

- ✅ **Error Handling**
  - Dynamic 404 error page
  - Form validation
  - Error messages and alerts

- ✅ **Additional Features**
  - Movie recommendations
  - "Why Choose Us" section
  - Footer with quick links
  - Accessible navigation

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 16.3](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2](https://react.dev/) - JavaScript library for building UIs
- **Animation**: [Framer Motion 13.4](https://www.framer.com/motion/) - Motion library for React
- **Styling**: 
  - [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
  - [PostCSS 4](https://postcss.org/) - CSS transformations
  - Custom CSS files for themed styling

### Development Tools
- **Linting**: [ESLint 9](https://eslint.org/) - JavaScript linting tool
- **Package Manager**: npm/yarn

### Browser Storage
- **Client-side Storage**: localStorage API for user data persistence

---

## 📁 Project Structure

```
movie/
├── public/                          # Static assets
├── src/
│   └── app/
│       ├── page.js                  # Home page
│       ├── layout.js                # Root layout
│       ├── not-found.jsx            # 404 error page ✨ NEW
│       ├── not-found.css            # 404 styles ✨ NEW
│       │
│       ├── globals.css              # Global styles
│       ├── Banner.css               # Banner component styles
│       ├── Navbar.css               # Navigation styles
│       ├── footer.css               # Footer styles
│       ├── movie.css                # Movie page styles
│       ├── chose.css                # Why Choose Us styles
│       ├── login.css                # Login page styles
│       ├── register.css             # Registration styles
│       ├── saved.css                # Saved movies page styles
│       │
│       ├── components/
│       │   ├── Banner.jsx           # Hero banner component
│       │   ├── Navbar.jsx           # Navigation bar component
│       │   ├── Footer.jsx           # Footer component
│       │   ├── MovieChatbot.jsx     # Interactive chatbot
│       │   └── WhyChooseUs.jsx      # Feature highlights
│       │
│       ├── login/
│       │   └── page.jsx             # Login page ✨ UPDATED
│       │
│       ├── register/
│       │   └── page.jsx             # Registration page ✨ UPDATED
│       │
│       ├── movies/
│       │   └── page.jsx             # Movies listing page
│       │
│       └── saved/
│           └── page.jsx             # Saved movies page
│
├── eslint.config.mjs                # ESLint configuration
├── jsconfig.json                    # JavaScript configuration
├── next.config.mjs                  # Next.js configuration
├── postcss.config.mjs               # PostCSS configuration
├── package.json                     # Dependencies & scripts
├── README.md                        # This file ✨ NEW
└── tailwind.config.js               # Tailwind CSS configuration

```

---

## ⚙️ Installation

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/cineverse.git
cd cineverse
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at **http://localhost:3000**

### Step 4: Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 🚀 Usage

### First Time User Flow

1. **Home Page** - Land on the beautiful CineVerse homepage
2. **Registration** - Click "Sign up" to create an account
   - Enter full name
   - Enter email address
   - Create a password
   - Confirm password
   - Accept terms and conditions
   - Click "Create My Account"

3. **Redirect to Login** - After successful registration, you're redirected to the login page

4. **Login** - Sign in with your registered email and password
   - Enter your email
   - Enter your password
   - Optionally check "Remember me"
   - Click "Sign In"

5. **Home Page Access** - After successful login, access the full CineVerse experience
   - Browse movies and shows
   - Save your favorites
   - Use the movie chatbot
   - Manage your collection

### Returning User Flow

1. Navigate to **http://localhost:3000/login**
2. Enter your registered email and password
3. Click "Sign In"
4. You'll be redirected to the home page with full access

---

## 🔐 Authentication Flow

### Registration Process
```
User Input (Name, Email, Password)
         ↓
   Form Validation
    - Non-empty fields
    - Password ≥ 6 characters
    - Passwords match
    - Terms accepted
         ↓
   Email Uniqueness Check
    - Query localStorage for existing users
         ↓
   Save User Data
    - Store in localStorage
    - Redirect to Login
```

### Login Process
```
User Input (Email, Password)
         ↓
   Form Validation
    - Non-empty fields
         ↓
   Credential Verification
    - Compare with stored users
         ↓
   Create Session
    - Store current user in localStorage
    - Set rememberMe if checked
         ↓
   Redirect to Home Page
```

### Session Management
- **Current User**: Stored as `cineverse_currentUser` in localStorage
- **All Users**: Stored as `cineverse_users` in localStorage
- **Remember Me**: Flag stored as `cineverse_rememberMe`

---

## 🗺️ Pages & Routes

| Route | Page | Description | Status |
|-------|------|-------------|--------|
| `/` | Home | Landing page with banner, movies, chatbot | ✅ Active |
| `/register` | Register | User registration form | ✅ Active |
| `/login` | Login | User login form | ✅ Active |
| `/movies` | Movies | Browse all movies and shows | ✅ Active |
| `/saved` | Saved Movies | View user's saved movies | ✅ Active |
| `*` | 404 | Dynamic error page | ✨ NEW |

---

## 🧩 Components

### Navbar.jsx
- Navigation bar with logo and menu items
- Responsive design
- Quick access to main sections

### Banner.jsx
- Hero section with eye-catching visuals
- Call-to-action buttons
- Animated background effects

### MovieChatbot.jsx
- Interactive chatbot for movie recommendations
- Real-time responses
- Chat interface

### WhyChooseUs.jsx
- Feature highlights section
- Benefits of using CineVerse
- Visual cards

### Footer.jsx
- Footer with copyright info
- Quick links
- Social media links

---

## 🎨 Styling

### CSS Architecture
- **Global Styles**: `globals.css` - Base styling and theme variables
- **Component-specific**: Individual `.css` files for each page
- **Tailwind CSS**: Utility classes for rapid development
- **PostCSS**: Processing and optimization

### Theme Colors
- **Primary Blue**: `#3b82f6`
- **Purple**: `#8b5cf6`
- **Pink**: `#ec4899`
- **Dark Background**: `#0f172a`, `#1e293b`
- **Text**: `#ffffff`, `rgba(255, 255, 255, 0.7)`

### Animations
- Smooth page transitions with Framer Motion
- Floating elements and particles
- Hover effects and button interactions
- Loading states with animated spinners

---

## 💾 Local Storage Data Structure

### User Data
```javascript
// Single User Object
{
  id: 1701123456789,
  name: "John Doe",
  email: "john@example.com",
  password: "hashedPassword123",
  createdAt: "2024-10-02T10:30:45.123Z"
}

// All Users Array
localStorage.getItem("cineverse_users")
// Returns: [{ user1 }, { user2 }, ...]

// Current Session
localStorage.getItem("cineverse_currentUser")
// Returns: { id: 123, name: "John", email: "john@example.com" }

// Remember Me Flag
localStorage.getItem("cineverse_rememberMe")
// Returns: "true" or null
```

### Saved Movies
```javascript
// Movie Object (Example)
{
  id: 1,
  title: "The Shawshank Redemption",
  year: 1994,
  rating: 9.3,
  poster: "url-to-poster",
  description: "Two imprisoned men bond...",
  genre: ["Drama"],
  addedAt: "2024-10-02T12:45:30.000Z"
}
```

---

## ⚙️ How It Works

### Registration & Login Process

#### 1. Registration
```jsx
// User submits registration form
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validate inputs
  // Check if email exists
  
  // Create new user object
  const newUser = {
    id: Date.now(),
    name, email, password,
    createdAt: new Date().toISOString()
  };
  
  // Save to localStorage
  const users = JSON.parse(localStorage.getItem("cineverse_users") || "[]");
  users.push(newUser);
  localStorage.setItem("cineverse_users", JSON.stringify(users));
  
  // Redirect to login
  router.push("/login");
}
```

#### 2. Login
```jsx
// User submits login form
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem("cineverse_users") || "[]");
  
  // Find matching user
  const user = users.find(u => 
    u.email === email && u.password === password
  );
  
  if (!user) {
    setError("Invalid credentials");
    return;
  }
  
  // Create session
  localStorage.setItem("cineverse_currentUser", JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email
  }));
  
  // Redirect to home
  router.push("/");
}
```

#### 3. Session Persistence
```javascript
// Check if user is logged in
const currentUser = localStorage.getItem("cineverse_currentUser");

if (!currentUser) {
  // Redirect to login
  router.push("/login");
} else {
  // User has access
  const user = JSON.parse(currentUser);
  console.log(`Welcome, ${user.name}!`);
}
```

### 404 Error Page

The dynamic 404 page is triggered when:
- User navigates to non-existent routes
- Page not found in application routing
- Invalid URL paths

Features:
- Animated 404 display
- Helpful navigation suggestions
- Return to home button
- Browse movies button
- Go back option

---

## 👨‍💻 Development

### Running in Development Mode
```bash
npm run dev
```
- Hot-reload enabled
- File changes automatically refresh
- Dev server runs on `http://localhost:3000`

### Building Components

#### Creating a New Component
```jsx
// src/app/components/MyComponent.jsx
"use client";

import React from "react";
import "./MyComponent.css";

export default function MyComponent() {
  return (
    <div className="my-component">
      {/* Component content */}
    </div>
  );
}
```

#### Creating a New Page
```jsx
// src/app/my-page/page.jsx
"use client";

import React from "react";

export default function MyPage() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

### Code Quality

#### ESLint
```bash
npm run lint
```
Checks code quality and consistency

#### Formatting
- Use consistent indentation (2 spaces)
- Follow React/Next.js best practices
- Comment complex logic

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Environment Configuration** (if needed)
   - Set environment variables in Vercel dashboard
   - Redeploy

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

We welcome contributions to CineVerse! Here's how to help:

### Steps to Contribute

1. **Fork the repository**
```bash
git clone https://github.com/yourusername/cineverse.git
cd cineverse
```

2. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for clarity
   - Test your changes

4. **Commit your changes**
```bash
git add .
git commit -m "Add: description of changes"
```

5. **Push to your fork**
```bash
git push origin feature/your-feature-name
```

6. **Create a Pull Request**
   - Describe your changes
   - Reference any related issues

### Contribution Guidelines
- Keep changes focused and single-purpose
- Write clear commit messages
- Update documentation as needed
- Test thoroughly before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Use for commercial projects
- ✅ Modify the source code
- ✅ Distribute the software
- ✅ Use privately
- ⚠️ Include license and copyright notice
- ❌ Hold liable for issues

---

## 💬 Support

### Getting Help

**Documentation Issues**
- Check the [Project Structure](#project-structure) section
- Review [How It Works](#how-it-works)

**Technical Issues**
- Check browser console for errors
- Verify localStorage is enabled
- Clear browser cache and try again

**Feature Requests**
- Open an issue on GitHub
- Describe the desired feature
- Explain the use case

### Common Issues

#### "Email already registered"
- This email is already used
- Try logging in instead
- Use a different email for registration

#### "Invalid email or password"
- Check your email spelling
- Verify your password
- Make sure Caps Lock is off

#### "Page not found (404)"
- The URL might be incorrect
- Use navigation links to access pages
- Check for typos in the URL

#### localStorage Not Working
- Enable localStorage in browser settings
- Clear browser cookies and cache
- Try in incognito/private mode
- Use a different browser

---

## 🎯 Roadmap

### Version 1.1 (Upcoming)
- [ ] Social authentication (Google, GitHub)
- [ ] Movie ratings and reviews
- [ ] Personalized recommendations
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile customization

### Version 1.2
- [ ] API integration for real movie data
- [ ] Watch list and viewing history
- [ ] Social sharing features
- [ ] User following/friends system
- [ ] Discussion forums

### Version 2.0
- [ ] Mobile app (React Native)
- [ ] Backend database (MongoDB/PostgreSQL)
- [ ] Real-time notifications
- [ ] Advanced search and filters
- [ ] Admin dashboard

---

## 📞 Contact & Social

- **Email**: support@cineverse.com
- **Twitter**: [@CineVerse](https://twitter.com)
- **GitHub**: [GitHub Repository](https://github.com)
- **Discord**: [Join Community](https://discord.com)

---

## 🙏 Acknowledgements

- **Framer Motion** for smooth animations
- **Next.js** team for the amazing framework
- **Tailwind CSS** for utility-first styling
- **React** community for inspiration and support
- All contributors and testers

---

## 📊 Project Statistics

- **Total Files**: 20+
- **Components**: 5
- **Pages**: 7 (including 404)
- **Lines of Code**: 2000+
- **CSS Animations**: 15+
- **Responsive Breakpoints**: 3 (Desktop, Tablet, Mobile)

---

**Made with ❤️ by CineVerse Team**

*Last Updated: October 2, 2024*
*Version: 1.0.0*

---

## 📝 Changelog

### Version 1.0.0 (Initial Release)
- ✨ User registration system
- ✨ User login system
- ✨ Dynamic 404 error page
- ✨ Movie discovery page
- ✨ Saved movies functionality
- ✨ Interactive chatbot
- ✨ Responsive design
- ✨ Smooth animations
- ✨ Comprehensive documentation

---

**Happy watching! 🎬🍿**
