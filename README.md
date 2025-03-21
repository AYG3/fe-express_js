# React + Vite + Google OAuth2

This is a simple React application built with Vite, featuring Google OAuth2 authentication using `react-google-button`.

## Setup

### Prerequisites
- Node.js installed
- NPM or Yarn installed

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Features
- React with Vite for fast development
- Google OAuth2 authentication
- `react-google-button` for a styled Google login button

## Adding Google Authentication
### Install Google Button Component
```sh
npm install react-google-button
```

### Usage in React Component
Modify your React component to include the Google login button:
```jsx
import GoogleButton from 'react-google-button';

function App() {
  async function auth() {
    const res = await fetch('http://localhost:3000/request', { method: 'POST' }); // Sends a POST request to the backend to initiate Google OAuth2 authentication
    const data = await res.json();
    window.location.href = data.url; // Redirects the user to Google's OAuth2 login page for authentication
  }

  return (
    <div> 
      <h1>Welcome to MemoStream</h1>
      <h3>Google OAuth2</h3>
      <GoogleButton onClick={auth} />
    </div>
  );
}

export default App;
```

## Running the Project
1. Start the React app:
   ```sh
   npm run dev
   ```
2. Click the Google login button to authenticate.

## Resources
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Google OAuth2](https://developers.google.com/identity/protocols/oauth2)
- [react-google-button](https://www.npmjs.com/package/react-google-button)

