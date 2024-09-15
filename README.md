# Chattinng-APP

## Front-end: React, Vite, Tailwind, Daisy UI
## Back-end: Node.js, Express, MongoDB, socket.io, MERN

#### Ref: [Chatting-App](https://www.youtube.com/watch?v=HwCqsOis894)

### Step Setting
- mkdir back-end and front-end folder
- cmd: cd font-end
- cmd: npm create vite@lastest .
(choose React --> choose JavaScript)
- cmd: npm i
- cmd: npm run dev
- cmd: cd ..
- cmd: npm init -y (make Nodejs)
- cmd: npm i express mongoose socket.io dotenv cookie-parser bcryptjs jsonwebtoken
- cmd: npm i validator
- cmd: npm i nodemon --save-dev
- cmd: cd back-end
- make 'server.js' file
- rewrite 'scripts' in 'package.json' file --> "server": "nodemon /web-chatting/back-end/server.js"
- cmd: npm  run server
- make '.env' file --> set 'PORT=8000' in '.env' file --> code in 'server.js' file to connect to PORT
- add ("type": "module",) in 'package.json' file
- cmd: cd front-end
- cmd: npm i react-router-dom
- cmd: npm i react-hot-toast ([react-hot-toast](https://react-hot-toast.com/))
- add <Toaster/> in your App.jsx
- cmd: npm install zustand (in front-end folder)
- cmd: npm i socket.io-client (in front-end folder)

----------------------------------Key search something-----------------------------
- glassmorphism tailwind css
- Install daisyUI as a Tailwind CSS plugin: [daisuUI](https://daisyui.com/docs/install/)
- Install react-icons: [react-icons](https://www.npmjs.com/package/react-icons)
- react-router-doom: <BrowserRouter/>; <Routes>
- react-dom: <Link> instead of <a> tag;
- search "skeleton" in daisyui

--------------------------------Flow-connect-----------------------------
1. Sigup forward to Login:
- Data save in DB and Local Storage from Sigup form
- data --> AuthContext.js (using "useContext" Reactt) --> useSigup.js --> Sigup transfer to Login page.
- flow: main.js --> App.jsx --> Signup.jsx

