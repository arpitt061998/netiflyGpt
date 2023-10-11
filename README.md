
# DEMO LINK:

[<span style="font-size: 24px; font-weight: bold;">NETIFLYGPT DEMO**</span>](https://movie-netifly.web.app/)

# NETFLIX GPT (By Arpit)

    installed create vite app
    configured tailwind with vite
    Form validation
        -Authentication
            - Google firebase(Disable CORS extension for setting up authentication)
    useRef Hook
    Firebase setup
    Deploying app in production
    Create signUp user account
    implement signin user api
    created redux store with userSlice
    fixed signup sign in issue
    fixed naviagte redirection issue
    unsubscribe to onAuthStateChanged callback
    Registered on tmdb webiste, create an app and get access token
    Get data from TMDB now playing movie list API 
    created redux store with movieslice
    Listed all the movie cards based on upcoming movie, top rated movies and popular movies
    Dynamic intiliazation and embedding of youtube videos in page.
    Integrated application with openai api to list movies based on user choice
    ddded .env file for storing api keys
    made site responsive

# Features
    
    - login/signup page
        - Sign In/ Sign up Form
        - redirect to browsepage

    - Login form

    - Browse page(after authentication)
        - Header
        - Main movie
            - Trailer in background
            - Title and description
            - Movie Suggestion
                -Movie List
    - Netflix gpt
        - Search bar
        - Movie suggestion
# netiflyGpt


# steps for deployment using firebase(hosting)
    1. Install firebase CLI 
    2. Firebase login
    3. Initialize firebase (firebase --init)
    4. Deploy command -firebase deploy

# FYI (INFO)
    1. API was calling twice because of <React.strictMode>
    It happens only in developer mode, when we deploy in production
    it doesn't calls twice. It does two Api calls just to check inconsistencies in the application.
