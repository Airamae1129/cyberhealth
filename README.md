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
│       │   └── Footer.js             # Site footer w/ subscribe
│       └── pages/
│           ├── Home.js               # Landing page (hero, animations)
│           ├── Services.js           # 3 expandable service categories
│           ├── News.js               # Newsroom / blog cards
│           ├── About.js              # Team profiles
│           └── Contact.js            # Contact form + details
│
└── memory/
    └── PRD.md                        # Product Requirements Doc


