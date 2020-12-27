async function sendRequest(url, method, data){
    try{
  
      let options = {//options passed to fetch function
          method: method,
          headers: { 
            'Content-Type' : 'application/json',
          }
      };
  
      if(data)//data will be given for PUT & POST requests
        options.body = JSON.stringify(data);//convert data to JSON string
  
      let response = await fetch(url, options);
        
      return response.json();
  
    }catch(error){
      return error;//catch and log any errors
    }
  }

async function getApps(){
    const apps = [
      {
        "group": "CariTech",
        "category": "covid",
        "url": "https://info-a7e19.web.app/",
        "repo": "https://github.com/CariTech-INFO/INFO-PROJECT",
        "image": "https://drive.google.com/open?id=1wg1Sgz511rYiMgs-CCxnGN6AbBwc20uQ",
        "tags": "Covid-19, essential shopping, opening hours",
        "title": "COVID Alert",
        "description": "Provides information from essential business"
      },
      {
        "group": "Coronavirus Technology Insitute",
        "category": "covid",
        "url": "https://covid-19-b1be2.firebaseapp.com/index.html",
        "repo": "https://github.com/SarahMahadeosingh/COVID-19",
        "image": "https://drive.google.com/open?id=1yUjaDeXKDZoG8-BgLHuv6lLg8qaz-nr0",
        "tags": "Coronavirus, COVID-19, virus",
        "title": "COVID-19 Website",
        "description": "This website was built to inform persons of the ongoing COVID-19 pandemic"
      },
      {
        "group": "__null418",
        "category": "covid",
        "url": "https://null418.justinbaldeo.com/",
        "repo": "https://github.com/Boldoosang/__null418-finalProject",
        "image": "https://drive.google.com/open?id=1_a4vqeRWEjEYS50kC5y8TTsog3Vjits-",
        "tags": "Covid-19, Virus, Visualizer, Informative, Coronavirus",
        "title": "Coronavirus Tracker",
        "description": "Single page web application that provides information and the latest statistics for the Coronavirus."
      },
      {
        "group": "COVID-20",
        "category": "covid",
        "url": "https://covid-19-tracker-1f64b.web.app/index.html",
        "repo": "https://github.com/Trillexxx/covid-19-tracker",
        "image": "https://drive.google.com/open?id=1M37-Ojb8bvTXMbjYpdKIZVFAR4JcBR-D",
        "tags": "pandemic, corona, COVID19, virus, spread, corona updates, tracker",
        "title": "COVID-19 TRACKER",
        "description": "Our application tracks and updates the user in real-time the spread of the pandemic COVID-19 globally."
      },
      {
        "group": "Ishika Gopie, Pryia Lackhan, Aalimah Ramai",
        "category": "data",
        "url": "https://global-weather-ed6c6.web.app/index.html",
        "repo": "https://github.com/pryia10157/weatherapp",
        "image": "https://drive.google.com/open?id=1LP80x63pjXnQRPpyS3d_jMlbKxxid-FW",
        "tags": "weather, realtime, climate",
        "title": "Global Weather",
        "description": "The website we created is a data visualization global weather and climate website based on global real time and statistical data. It has a real time weather application and it displays graphs based on global climate and weather data."
      },
      {
        "group": "KFC and Chill?",
        "category": "covid",
        "url": "https://covid-affected-terrotories.firebaseapp.com/",
        "repo": "https://github.com/Ce-bit/Covid_Affected-",
        "image": "https://drive.google.com/open?id=1iQiHpOgoywsNFgGALWietDB8xTVEKOD9",
        "tags": "",
        "title": "Coronavirus Updates Tracker",
        "description": "The purpose of this web application is to allow users to select any country from around the world and provide them with the latest statistical figures."
      },
      {
        "group": "PROJECT DREAMS",
        "category": "data",
        "url": "https://anisoul-mal.web.app/",
        "repo": "https://github.com/Hansel-alt/PROJECT_DREAMS.git",
        "image": "https://drive.google.com/open?id=1JgoJk9B0PDmW7IiDcd7s7qFo_tlj9uJs",
        "tags": "PROJECT DREAMS, AniSoul, anime, manga",
        "title": "AniSoul",
        "description": "Used 3rd party api to display text sentiment analysis of Animes, Mangas, etc."
      },
      {
        "group": "ReLion Labs",
        "category": "data",
        "url": "https://relion-labs-c7b3a.firebaseapp.com/",
        "repo": "https://github.com/Titangrass/newtest",
        "image": "https://drive.google.com/open?id=16pn6JG6CFkDnF5TGIWnST9bfX-1Tu6Il",
        "tags": "weather",
        "title": "Weather App",
        "description": "This app allows the user to enter their location and get data on the type of weather occurring presently"
      },
      {
        "group": "Web Demolishers",
        "category": "data",
        "url": "https://aqualad-jp21.github.io/US-Disaster-Data/",
        "repo": "https://github.com/Aqualad-jp21/US-Disaster-Data",
        "image": "https://drive.google.com/open?id=1TwdHii6vpa-pMjKPcPYARYOAU8KdjP1C",
        "tags": "Weather, Hurricane, Flood, Tornado, Disaster, US",
        "title": "US Disaster Data Visualizer ",
        "description": "This App takes the data of the number Disasters in the US and places it in a Graphical format"
      },
      {
        "group": "XDJ",
        "category": "covid",
        "url": "https://xdj-covid-19-tracker.web.app/",
        "repo": "https://github.com/xernyy/covid-19-tracker",
        "image": "https://drive.google.com/open?id=1va42OBhIExJ-Lqv6D5kOd80diHfzHWPh",
        "tags": "",
        "title": "XDJ COVID-19 Tracker",
        "description": "Takes data from an API and displays it on the app and also gives information about the virus"
      },
      {
        "group": "<404>",
        "category": "service",
        "url": "https://cookie-finder--info1601.firebaseapp.com/",
        "repo": "https://github.com/axliya/INFO-1601-Project",
        "image": "https://drive.google.com/open?id=1B3Hte2z-tzA8En_nFqi7L1DqjBgZVCZi",
        "tags": "API,cookie,cookies,recipe,finder,search,recipe puppy",
        "title": "Cookie Recipe Finder",
        "description": "For this project, a simple cookie recipe search application was built using a 3rd party API"
      },
      {
        "group": "ADKJ",
        "category": "service",
        "url": "https://tracking-app-f64d5.web.app/",
        "repo": "https://github.com/johnuwi/famfindapp",
        "image": "https://drive.google.com/open?id=1Cuerv9WEuxZj293rGb3DAZjzNu3JDbj-",
        "tags": "geolocation",
        "title": "Family Tracking App",
        "description": ""
      },
      {
        "group": "AJ Cooper",
        "category": "service",
        "url": "https://hacker-news-webapp.web.app/",
        "repo": "https://github.com/lain-source/hacker-news-webapp/tree/master/hacker-news-webapp",
        "image": "https://drive.google.com/open?id=1CFOUALKDT3U6n9AsMVMwFLFGqT_hwHOW",
        "tags": "news, info, updates",
        "title": "News Web Application",
        "description": "Web Service (News App)"
      },
      {
        "group": "C.A.R",
        "category": "service",
        "url": "https://yummies-87b88.web.app/",
        "repo": "https://github.com/khalil4444/Yummies-Project-Submission",
        "image": "https://drive.google.com/open?id=1FEwCd1W6NfDu5Fj_ULyYQT8_9eg-OW45",
        "tags": "food, recipe",
        "title": "Yummies",
        "description": "We have created a simple web service that utilises the 3rd party API package Spoonacular, that fetches the best related recipe result for any food option searched found on the web. "
      },
      {
        "group": "Cafe Guys",
        "category": "service",
        "url": "https://cafe-1601-project-e2739.firebaseapp.com/index.html",
        "repo": "https://github.com/NWin-bot/Cafe-1601-Project",
        "image": "https://drive.google.com/open?id=1fxnsz7Qh-EVHGdPuU7E0i3hhwNPngyLK",
        "tags": "CafeGuys,MCC,SimpleWebService",
        "title": "",
        "description": ""
      },
      {
        "group": "CSS (Cameron-Stephen-Shania)",
        "category": "service",
        "url": "https://summonersearch-af52d.firebaseapp.com/",
        "repo": "https://github.com/cjwsugden/Summoner-Search",
        "image": "",
        "tags": "games, league of legends, nautilus, esports",
        "title": "Summoner Search",
        "description": "Lets users search for League of Legends usernames and shows their profile icon, level, and name."
      },
      {
        "group": "GIFHUB",
        "category": "service",
        "url": "https://whats-cooking-site.web.app/index.html",
        "repo": "https://github.com/zionhaye/GIFHUB-Recipes-Search-Application",
        "image": "https://drive.google.com/open?id=1bz1XXYAfxoMLWETOP_oMCoFkytmUyYuV",
        "tags": "Vegan, vegetarian, drinks, recipes, desserts, search",
        "title": "What's Cooking",
        "description": "What's Cooking is a recipe search application that allows the user to search for all, vegan, vegetarian, drink or dessert recipes and also allows the user to search for recipes based on the ingredients that they have. "
      },
      {
        "group": "Group B",
        "category": "service",
        "url": "https://danieldcaesar.github.io/weather-service/public/",
        "repo": "https://github.com/danieldcaesar/weather-service",
        "image": "https://drive.google.com/open?id=11RmmiJoJ0dzlRKh9bjpI2sJIdNKAltG9",
        "tags": "speech recognition, geolocation, weather",
        "title": "",
        "description": ""
      },
      {
        "group": "Group Y",
        "category": "service",
        "url": "https://anime-catalogue.firebaseapp.com/index.html",
        "repo": "https://github.com/ameliawolf8/Anime-Catalogue",
        "image": "https://drive.google.com/open?id=1_AkXSRN0RjvsWniHggg_n0F2UEovWHjL",
        "tags": "anime, TV shows, explore, entertainment, search",
        "title": "Anime Catalogue",
        "description": "An easy to use web application that allows users to search for and discover the latest and most top rated anime titles."
      },
      {
        "group": "IcyTea",
        "category": "service",
        "url": "https://college-crave-6b11d.firebaseapp.com/",
        "repo": "https://github.com/christineramdhanie/CollegeCrave.github.io",
        "image": "https://drive.google.com/open?id=1DmaLJfhEfGtm2NwcOGnNgxkv1q3obQ5t",
        "tags": "food, recipes, college, crave",
        "title": "College Crave",
        "description": "College Crave is a web-based application designed for busy college students who want quick and easy recipes on any food of their choosing. It consists of 4 webpages: StartUp Page, HomePage, Recipe Page, and Login Page which is simple to use and easy to understand. "
      },
      {
        "group": "League Group",
        "category": "service",
        "url": "http://localhost:5005",
        "repo": "https://github.com/Darii868/1601-GROUP-PROJECT",
        "image": "",
        "tags": "",
        "title": "Champion Abilites",
        "description": "The google drive link was submitted in order to serve as a backup for the github url as it is missing a file that could not be uploaded because it was saying hidden, a file that may affect the overall look of the webpage, the missing file's name is .git and the file in the googledrive link is please-work which is the folder with everything for the webpage."
      },
      {
        "group": "League Team 6ix",
        "category": "service",
        "url": "https://footballpage-4f626.web.app/",
        "repo": "https://github.com/swangkat/InfoProject",
        "image": "https://drive.google.com/open?id=1zzE1ufDOketKHkQMgzuvTLgIWr8kQ_hb",
        "tags": "football, footballnews",
        "title": "League Team 6ix",
        "description": "Football site that displays the current table/standings for two main leagues along with real time news updates with option to search news by entering any team name"
      },
      {
        "group": "Max's grp",
        "category": "service",
        "url": "https://dhammatao.netlify.app/",
        "repo": "https://github.com/wustyle/Dhamma-Tao-Website",
        "image": "https://drive.google.com/open?id=1omUS3j7SLIJGLy9IDLzgl7WnTmeNP-6R",
        "tags": "",
        "title": "",
        "description": ""
      },
      {
        "group": "MEN -DAIZ just tryna pass",
        "category": "service",
        "url": "https://avramredman.github.io/info-1601-final-project/",
        "repo": "https://github.com/avramredman/info-1601-final-project",
        "image": "https://drive.google.com/open?id=11Zz6BlhU9YodYHlGd4LtXNCrH3IAVbDZ",
        "tags": "Hearthstone,cardgame,deck builder",
        "title": "The HearthStone Helper",
        "description": "To aid the players of the popular card game Hearthstone."
      },
      {
        "group": "Schwifty 50",
        "category": "service",
        "url": "https://test-a7091.web.app/#/charSearch",
        "repo": "https://github.com/RaeanneRamharrack/INFO1601/tree/responsive-v02",
        "image": "https://drive.google.com/open?id=1C3VFT1l4ETLqgHWHa8r01QBXFFW4yNPU",
        "tags": "Marvel, superhero, comics, search, profile",
        "title": "Get Schwifty",
        "description": "App allows you to search for a hero or a comic. A list of heroes or comics matching the search term is displayed. Any individual hero or comic may be clicked to display a detailed profile."
      },
      {
        "group": "T3B",
        "category": "service",
        "url": "https://tart-8a51a.web.app/Home.html",
        "repo": "https://github.com/JewelCC/T3B-Group-Website-Info-1601",
        "image": "https://drive.google.com/open?id=1zZH8GpySZ9yB0YRoSVxyWcClNPQ9SvKY",
        "tags": "Art, Trinidad culture, digital art",
        "title": "Tart (Trinidad Art)",
        "description": "A website that allows for discussion of local Trinidad Art"
      },
      {
        "group": "Tasty Recipes",
        "category": "service",
        "url": "https://gracious-joliot-d734e2.netlify.app/",
        "repo": "https://github.com/govinda98/ReactApp",
        "image": "https://drive.google.com/open?id=1LYFBTwrzp3fbWELkQOq1M_c4hNavzCYO",
        "tags": "Recipes, Food",
        "title": "Tasty Recipes",
        "description": "Main functionality of the web application is the ability to search for recipes. "
      },
      {
        "group": "Tech Squad ",
        "category": "service",
        "url": "https://je-tech.github.io/react-deploy/",
        "repo": "https://je-tech.github.io/react-deploy/",
        "image": "https://drive.google.com/open?id=1P8h-TQ88XtWVtLc_i-O-w_bgPQVna5Li",
        "tags": "Tech, Squad, Deli, App",
        "title": "Deli Recipe App",
        "description": "Deli is a recipe app created to make recipes easily available for users online rather than a traditional cook book."
      },
      {
        "group": "Ace",
        "category": "social",
        "url": "https://info1601-75c81.web.app/",
        "repo": "https://github.com/816021379/INFO1601",
        "image": "https://drive.google.com/open?id=1KsG3hxrtyxteY4qFrszA88sY5plQAw7J",
        "tags": "Social media,node",
        "title": "Twit-Tools",
        "description": "Our app is based on twitter it allows the user to view the people that don't follow them back"
      },
      {
        "group": "ConnecTech",
        "category": "social",
        "url": "http://gaming-world-tt.web.app/",
        "repo": "https://github.com/DexterUWI/gaming-world-tt",
        "image": "https://drive.google.com/open?id=1YpgBEXK3NvJAOXdUoADLUIl38U30KUCy",
        "tags": "e-commerce, gaming, action, fun, ps3, xbox, gameplay, shopping",
        "title": "Gaming World TT",
        "description": "This is a fully-responsive pseudo e-commerce website that uses AJAX via jQuery to parse and render JSON objects to the DOM."
      },
      {
        "group": "Croi - INFO 1601 Group Project",
        "category": "social",
        "url": "https://musicapp-1fb91.firebaseapp.com/",
        "repo": "https://github.com/WarriorOGaming/warriorogaming.github.io",
        "image": "https://drive.google.com/open?id=1l4AmLnGkq_n9F0zhN0qlu8FTKbskKIgi",
        "tags": "Social Media, Music",
        "title": "Moosic Social",
        "description": "A Social Media Web Application targeted towards musicians to share their posts/projects etc."
      },
      {
        "group": "Cupecakes",
        "category": "social",
        "url": "https://konnectify-d8aa5.web.app/",
        "repo": "https://github.com/cumberson97/Konnectifi.git",
        "image": "https://drive.google.com/open?id=1pSAwVn-uXwd8jtRbOmW_Nuijgh9gLg0X",
        "tags": "Konnect,Konectifi,Konnectify,connect",
        "title": "Konnectifi",
        "description": "Allows person to save post ideas and general ideas for later review and post to facebook if they want ."
      },
      {
        "group": "InfoGroup",
        "category": "social",
        "url": "https://chatter.arunpersaud3010.repl.co/index.html",
        "repo": "https://github.com/arunPersaud3010/Info1601-Project",
        "image": "https://drive.google.com/open?id=1ZGyM8rXeCKb5jnIu05mQjDTSFyKSUv8y",
        "tags": "chatter, post.it!",
        "title": "Post.It!",
        "description": "Social Media Client that allows a user to login and create posts on the website and can other features on the website to play games, go to other desired websites or view random pictures."
      },
      {
        "group": "SARS",
        "category": "social",
        "url": "https://info-group-project.firebaseapp.com",
        "repo": "https://github.com/Sade11/SARS-Group-Project-INFO1601",
        "image": "https://drive.google.com/open?id=1P_FhZBime_71nQP66wxP_deEq-mqUWjg",
        "tags": "SARS",
        "title": "SARS",
        "description": "It was created for like-minded persons so that they can gather to communicate their thoughts and ideas through posts."
      },
      {
        "group": "SoNet",
        "category": "social",
        "url": "https://sonet-14fda.firebaseapp.com/",
        "repo": "https://github.com/jonobrien99/SoNet",
        "image": "https://drive.google.com/open?id=10N_nZf8iHEkAcoMEjjN6uEQlyXfEsf7C",
        "tags": "pictures, posts, messaging, SoNet",
        "title": "So Net",
        "description": "This website is a social media client where users can post messages and images for other user to see and interact with."
      },
      {
        "group": "VC_Posts",
        "category": "social",
        "url": "https://vcposts--quatrobeatteste.repl.co/",
        "repo": "https://github.com/QuatroBeatTester/VC_Posts/tree/master",
        "image": "https://drive.google.com/open?id=1Jz9wac1n_H425Xp_EOLYnR3TftyltCGD",
        "tags": "",
        "title": "VC_POSTS",
        "description": "This app is a text-based application that makes use of Facebook graph API and a quotes API. It should allow users to ‘view’ their latest Facebook posts, ‘create’ new posts and ‘share’ quotes to their timeline\n"
      },
      {
        "group": "CAL",
        "category": "utility",
        "url": "https://myeventcalendar.web.app/",
        "repo": "https://github.com/Jehazekel/CAL",
        "image": "https://drive.google.com/open?id=1VP-Mz-6i8JlboiTCBMv7qwGx62MIpw5J",
        "tags": "calendar, responsive, event, monthly, proficient",
        "title": "Proficient Event Calendar",
        "description": "A responsive event calendar app, that can be accessed on mobile/PC devices seamlessly "
      },
      {
        "group": "CHADS",
        "category": "utility",
        "url": "https://interlinked-b9a18.web.app/",
        "repo": "https://github.com/SameirAli/Info1601Project",
        "image": "https://drive.google.com/open?id=1-E3AaQgTHbdYp1UWQk4rURBtAjdrW5YK",
        "tags": "idle, cookie, clicker, cross,platform, CHADS, info1601,project",
        "title": "Fun Multi-platform Cookie Clicker Game",
        "description": "Idle Cookie Clicker Game to benefit individuals who have limited access to electronic devices, is playable on all devices that can connect to the internet and generates cookies by clicking the cookie sprite. Has features such as automatic upgrades to levels and passive upgrades."
      },
      {
        "group": "Malandros",
        "category": "utility",
        "url": "https://chat-e0c59.web.app/#/",
        "repo": "https://github.com/jael-romain/Private-Msg",
        "image": "https://drive.google.com/open?id=1gN8RvhyHGWDTgB6plr9cCykMPH7416A-",
        "tags": "",
        "title": "PRIVATE MSG",
        "description": "A simple instant messaging app where users can login and chat with each other in real time."
      },
      {
        "group": "SSK",
        "category": "utility",
        "url": "https://weather-app-ssk.web.app/",
        "repo": "https://github.com/KyleRamkissoon/SSK-Weather-app",
        "image": "https://drive.google.com/open?id=1BJ-FNgYGuCJWtjPkesOlKnD7U-uxBhdy",
        "tags": "Weather,App,Geo location,Weather app,Weather Search",
        "title": "",
        "description": ""
      },
      {
        "group": "Team Rocket",
        "category": "utility",
        "url": "https://chatapp-33234.web.app/",
        "repo": "https://github.com/varune123/chatApp",
        "image": "https://drive.google.com/open?id=1UxyX4TQbyag0UihdOg32nkMA-E-LXO1U",
        "tags": "firebase, realtime-database, chatroom",
        "title": "Rocket Chat",
        "description": "Online chat room"
      },
      {
        "group": "Techno Typhoon",
        "category": "utility",
        "url": "https://info1601website.firebaseapp.com/",
        "repo": "https://github.com/Aadil-speck/cocobean.git",
        "image": "https://drive.google.com/open?id=14VUrH3XrIZGG6VYqNt5R4F3IWqPbvO_0",
        "tags": "Location based thingy",
        "title": "Trackstars",
        "description": "Trackstars is an application that uses Goggle Map`s API to track the location of a user and share or track their friends location."
      },
      {
        "group": "The Food Bible",
        "category": "utility",
        "url": "https://info-1601-project-foodbible.firebaseapp.com/",
        "repo": "https://github.com/shane12345601/test",
        "image": "https://drive.google.com/open?id=1cDFYGSfgkmKlQ5qrw4ZwFFys0fe1nzPP",
        "tags": "food, search, engine, recipe, health, bible",
        "title": "The Food Bible",
        "description": "Recipe Search Engine"
      }
     ];
     apps.map(app=> app.tags = app.tags.split(','));
     return apps;
}



export {getApps}