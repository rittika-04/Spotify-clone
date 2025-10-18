🟢 Spotify Clone


A professional-grade Spotify web application clone built using React, Vite, Firebase, and the Spotify Web API.
This project offers a rich, real-time music streaming experience with user authentication, playlist management, and playback features that closely mimic the official Spotify app.

✨ Overview
The goal of this project is to recreate Spotify’s sleek UI and core functionality while maintaining high performance through Vite’s fast build system.
It’s ideal for learning React state management, API integration, Firebase authentication, and frontend architecture patterns.

🎧 Features
Authentication: Secure login via Firebase and session persistence

Browse Music: Fetch real Spotify tracks, playlists, and albums in real-time

Playback Controls: Play, pause, skip, shuffle, and loop tracks

Playlist Management: Create, edit, and view playlists dynamically

Now Playing Bar: Real-time song progress, album art, and player state synchronization

Search Functionality: Search artists, albums, and songs with live results

Responsive UI: Adaptive layout using TailwindCSS for all devices

Smooth Navigation: Built using React Router v6

Dynamic Context: Controlled via React Context API (PlayerContext)

⚙️ Tech Stack
Layer	Technology
Frontend	React, Vite, JavaScript (ES6+), Tailwind CSS
State Management	Context API
Routing	React Router v6
Backend / Auth	Firebase
APIs	Spotify Developer API
Deployment	Vercel / Netlify
Package Manager	npm or yarn
🛠️ Installation
Follow these steps to set up the application locally:

bash
# Clone this repository
git clone https://github.com/rittika-04/spotify-clone.git

# Navigate into project directory
cd spotify-clone

# Install dependencies
npm install

# Create an environment file (.env) and add your keys
VITE_SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_KEY

# Run the development server
npm run dev
Access the app at http://localhost:5000

🌐 Live Demo
You can view a live version here:
👉 [https://spotify-clone-yourname.vercel.app](https://spotify-clone-brown-one.vercel.app/)

🧩 Project Architecture
text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Player.jsx
├── context/
│   ├── PlayerContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   ├── Playlist.jsx
├── App.jsx
├── main.jsx
🚀 Deployment
To build for production:

bash
npm run build
Deploy output from the dist/ folder using Vercel, Netlify, or any static host.

🧠 Future Enhancements
Add user theme customization (dark/light modes)

Integrate song lyrics API

Add AI recommendations for playlists

Enable offline/playlist caching

🧑‍💻 Author
Developed with passion by Rittika Shaw
Feel free to connect and share your feedback or improvements.

If this helped you, please ⭐ star the repository!

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.
