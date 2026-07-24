/app-main/
├── backend/
│   ├── .env                          # Environment variables (MONGO_URL, DB_NAME)
│   ├── requirements.txt              # Python dependencies
│   └── server.py                     # FastAPI application
│
├── frontend/
│   ├── .env                          # Frontend env (REACT_APP_BACKEND_URL)
│   ├── package.json                  # Node dependencies
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── craco.config.js               # CRACO build config
│   ├── postcss.config.js             # PostCSS config
│   ├── public/
│   │   └── index.html                # HTML entry point
│   └── src/
│       ├── App.js                    # Main app with routes
│       ├── App.css                   # Global styles
│       ├── index.js                  # React entry point
│       ├── index.css                 # Tailwind directives
│       ├── components/
│       │   ├── Navigation.js         # Fixed top nav with logo
│       │   └── Footer.js             # Site footer with subscribe
│       └── pages/
│           ├── Home.js               # Landing page (hero, animations)
│           ├── Services.js           # 3 expandable service categories
│           ├── News.js               # Newsroom/blog cards
│           ├── About.js              # Team profiles
│           └── Contact.js            # Contact form + details
│
├── memory/
│   └── PRD.md                        # Product Requirements Document

Backend
cd backend 
dir 
python -m venv venv 
.\venv\Scripts\Activate
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
test (http://localhost:8001/api/)

$env:Path="C:\Program Files\nodejs;$env:Path"
node -v
npm -v

Frontend
cd "C:\Users\Aira Mae\Downloads\Cyberhealth\app-main\app-main\frontend"
& "C:\Program Files\nodejs\node.exe" -v
$env:Path = "C:\Program Files\nodejs;C:\Users\Aira Mae\AppData\Roaming\npm;$env:Path"
node -v
npm -v
yarn -v
yarn start or npm start
http://localhost:3000/

backend run>>
cd "C:\Users\Aira Mae\Downloads\Cyberhealth\app-main\app-main\backend"
venv\Scripts\activate
python -m uvicorn server:app --reload