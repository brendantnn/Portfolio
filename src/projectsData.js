
import beejImage from './assets/beej.png';
import yptHomeImage from './assets/ypt_home.jpg';
import yptWorkoutsImage from './assets/ypt_workouts.jpg';
import stepwatchImage from './assets/stepwatch.jpg';
import stepwatchAppImage from './assets/stepwatchapp.jpg';
import oopgameImage from './assets/oopgame.png';
import gamestoreImage from './assets/gamestore.png';
import shoeInventoryImage from './assets/database.png';
import robotCarVideo from './assets/robotcar-demo.mp4';
import pushUpVideo from './assets/pushup.mp4';



const projects = [

  {
    title: "AI Chatbot for Podiatry Consultation",
    description: "Full-stack, multilingual AI chatbot system for Singapore General Hospital's podiatry department. Automates triage, streamlines appointment booking, and supports podiatrists in managing consultations.",
    category: "Artifical Intelligence / Machine Learning",
    techStack: ["OpenAI GPT", "Node.js", "Express.js", "Firebase", "Google Translate API", "Twilio", "JavaScript"],
    details: `Built a full-stack, multilingual AI chatbot system to automate triage, streamline appointment booking, and support podiatrists in managing patient consultations. Designed to improve efficiency and reduce waiting times in Singapore General Hospital's podiatry department.\n\n- Developed chatbot with AI triage, multilingual support, intent classification\n- Engineered GPT-3.5 prompt flows for podiatric case classification and urgency detection \n- Implemented automated booking logic based on triaged urgency levels\n- Applied Agile methodology and led sprint-based quality assurance with internal simulations`,
    images: []
  },

  {
    title: "AI integrated android fitness app",
    description: "Android fitness app that uses AI pose detection and AR to improve IPPT performance through guided workouts and running tracking.",
    category: "Artifical Intelligence / Machine Learning",
    techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "ML Kit Pose Detection",
      "CameraX", "Room", "Google Maps Compose", "Scene Viewer (AR)"],
    details: `Built a full-featured Android app that helps users improve their IPPT performance using AI and AR. The app detects correct form for sit-ups and push-ups, tracks runs via GPS, and includes tutorials in augmented reality.

Key Features:
• Pose Detection using Google ML Kit to count sit-ups and push-ups while checking for form
• Real-time visual/audio feedback and countdowns mimicking IPPT test conditions
• Running Tracker using Google Maps Compose and location data
• Workout history logging with Room local database for offline access
• AR tutorials using Scene Viewer to demonstrate proper form for each exercise`,

    images: [],
    video: pushUpVideo
  },

  {
    title: "Student Dropout Prediction",
    description: "Used ML models to predict student dropout risk based on academic and financial features. Performed feature engineering and benchmarking with XGBoost, LightGBM, and SVM.",
    category: "Artifical Intelligence / Machine Learning",
    techStack: ["Machine Learning", "Python", "Scikit-learn", "XGBoost", "LightGBM", "SVM", "Google Colab", "Pandas"],
    details: `With my group members, we built a machine learning pipeline to predict student dropout rates using academic records and financial indicators. Applied EDA, handled class imbalance, and engineered features like improvement scores and pass/fail ratios.\n\nEvaluated models including Random Forest, KNN, SVM, and Boosting algorithms. Achieved over 77% accuracy using XGBoost and LightGBM.
  
  `,

    images: [],
    video: null
  },

   {
    title: "Personal Portfolio",
    description: "The website you are at now! I built this to showcase my projects i've done so far. Built with React and Vite. React was my choice of framework because of its reusable components, perfect for adding new projects in the future.",
    category: "Web Applications",
    techStack: ["React", "Vite", "JavaScript", "CSS3"],
    details: "The website you are at now! I built this to showcase my projects i've done so far. Built with React and Vite. React was my choice of framework because of its reusable components, perfect for adding new projects in the future.",
    images: []
  },

  {
    title: "Shoe Inventory Management System",
    description: "A database-driven inventory system for a multi-store shoe retailer, featuring CRUD operations, role-based access, and analytics for stock and sales performance.",
    category: "Web Applications",
    techStack: ["MySQL", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Python (Pandas)", "Google Cloud"],
    details: `As part of a database systems module, my team and I developed a web-based inventory management system tailored for a multi-store shoe retail business. The project covered the full software development lifecycle, from ER modeling and schema design to implementation and performance analysis.\n\n- Role-based access control: Admins can manage inventory and view analytics; store staff have limited access\n- CRUD operations for managing products, stock, and orders  \n- Real-time alerts for low-stock items  \n- Analytics dashboard showing top-selling products, revenue comparisons, and stock-to-sales ratios  \n- SQL optimizations using CTEs and performance tuning, achieving up to 73.9% improvement`,
    images: [
      shoeInventoryImage
    ]
  },

  {
    title: "OptiRoute: Travel Route Optimisation System",
    description: "A Python web application that optimizes bus routes for transporting tourists from Changi Airport to multiple hotels in Singapore. Considers group size, hotel proximity, ERP charges, and traffic patterns to minimize travel cost and time.",
    category: "Web Applications",
    techStack: ["Data Structures and Algorithms", "Python", "Flask", "Graph Data Structures", "OpenStreetMap API", "LTA DataMall APIs"],
    details: `As part of a team project under the Data Structures and Algorithms module, we developed OptiRoute, a Python web application that optimizes bus routes for transporting tourists from Changi Airport to multiple hotels in Singapore.\n\nThe system considers group size, hotel proximity, ERP charges, and traffic patterns to minimize travel cost and time for transport operators.\n\n• Implemented the Nearest Neighbour Algorithm, a heuristic for solving the Travelling Salesman Problem (TSP), which determines the most efficient sequence of hotel drop-offs\n• Applied graph-based logic to minimize total route distance while ensuring practical runtime efficiency\n\nKey Features:\n• Used OpenStreetMap data to compute distances\n• Integrated ERP rates from LTA DataMall for realistic route cost calculations\n• Dynamically recommended vehicle type (van, minibus, coach) based on passenger volume\n• Grouped hotels within walking distance to optimize drop-off points`,
    images: []
  },

  {
    title: "Video Game E-Commerce Website",
    description: "Full-featured online game store using the LAMP stack. Features user authentication, shopping cart, order management, and admin dashboard for game management.",
    category: "Web Applications",
    techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap", "PayPal Sandbox API", "Google Cloud", "Git"],
    details: `As part of a team of four, I developed a full-featured online game store using the LAMP stack (Linux, Apache, MySQL, PHP) with HTML, CSS, JavaScript, and Bootstrap for frontend styling. The site allows users to register, browse games by genre, add items to cart, and simulate purchases via PayPal. Admins can manage games and view feedback through a secure dashboard.\n\nKey Contributions:\n- Developed the user authentication system (login, register) with hashed passwords and input validation to prevent XSS.\n- Built the shopping cart system with PHP session logic and integrated order history display using MySQL queries.\n- Created the order management page (order.php) to show past transactions dynamically.\n- Deployed on a Google Cloud VM (Ubuntu) running a LAMP server, and collaborated via Git.`,
    images: [
      gamestoreImage
    ]
  },
  {
    title: "Health & Wellness Web App",
    description: "Feature-rich health and fitness web application aimed at encouraging Singaporeans to adopt a healthier lifestyle. Combines educational content, fitness tracking, and health calculators in one platform.",
    category: "Web Applications",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "SQLite"],
    details: `Built a feature-rich health and fitness web application aimed at encouraging Singaporeans to adopt a healthier lifestyle. Key features include:\n\nUser Authentication: Register, log in, change password, and secure access with session-based authentication.\n\nWorkout Content: Access to curated workout videos and fitness articles to educate and motivate users.\n\nRunning Journal: Users can log runs (date, distance, duration), with pace auto-calculated. Data is stored in SQLite and supports edit/delete functions.\n\nHealth Tools: Includes interactive BMI and Calorie Calculators for body assessment and nutritional planning.\n\nNutrition & Recipes: Features educational nutrition articles and a healthy recipe library to promote balanced eating habits.\n\nFrontend & UX: Designed with clean HTML/CSS and JavaScript for form validation and user interactions. PHP handles server-side logic.\n\nThe app combines educational content, fitness tracking, and health calculators in one easy-to-use platform, making it a one-stop solution for users striving for wellness.`,
    images: [
      beejImage
    ]
  },
 


  {
    title: "Robotic Car with Semi-Autonomous Features",
    description: "Remote-controlled car with PID control, line following, gesture input, and obstacle avoidance built on Raspberry Pi Pico.",
    category: "Embedded Systems",
    techStack: ["C", "Raspberry Pi Pico", "Ultrasonic Sensor", "IR Sensor", "Wheel Encoder", "PID Control", "UART", "GY-511 Accelerometer"],
    details: `As part of a team of 5, we built a robotic car integrating both manual and autonomous functionalities for an embedded systems module. It uses multiple sensors and real-time C-based drivers for smooth and intelligent motion control.
  
  Key Features:
  • PID-based motor control using IR wheel encoders  
  • Line following and barcode scanning with IR array sensors  
  • Obstacle avoidance with ultrasonic distance sensing  
  • Gesture-based control via GY-511 accelerometer  
  • Real-time communication using UART over Wi-Fi  
  
  My Contributions:
  • Developed the PID logic for motor speed control  
  • Wrote custom C drivers for wheel encoder signal interpretation  
  • Assisted with debugging and tuning sensor accuracy and integration  
  `,
    images: [],
    video: robotCarVideo
  },
  {
    title: "Smartwatch Step-Tracker",
    description: "Developed a smartwatch on the tinyduino platform with Arduino IDE that tracks steps, and an Android app to display steps, calories burnt, and distance travelled.",
    category: "Embedded Systems",
    techStack: ["C++", "Arduino IDE", "Android Studio", "Tinyduino Platform", "Java"],
    details: `● With my team, we developed a smartwatch on the tinyduino platform with Arduino IDE that tracks the number of steps taken by the user\n● Developed an android application to display the steps, calories burnt, and distance travelled\n\nThis project combines hardware and software development, featuring:\n- Hardware: Smartwatch device built on Tinyduino platform\n- Software: C++ code for step detection and tracking\n- Mobile App: Android application for data visualization\n- Integration: Communication between hardware and mobile app`,
    images: [
      stepwatchImage,
      stepwatchAppImage
    ]
  },


  {
    title: "SentrySecure: Raspberry Pi Smart Home Security System",
    description: "Real-time home security and automation system using Raspberry Pi, MQTT, and Home Assistant. Detects motion using sensors and alerts homeowners via smartphone while triggering alarms and lights through networked Pi devices.",
    category: "Embedded Systems",
    techStack: ["Raspberry Pi", "MQTT (Mosquitto)", "Home Assistant", "Python", "Cisco Packet Tracer", "Linux (Raspbian)", "Wi-Fi LAN"],
    details: `As part of a 5-person team, I co-developed SentrySecure, a real-time home security and automation system using Raspberry Pi, MQTT, and Home Assistant. The system detects motion using sensors and alerts the homeowner via smartphone while triggering alarms and lights through networked Pi devices.\n\nKey Features:\n• Used ultrasonic sensors for motion detection at doorways\n• Deployed MQTT (Mosquitto Broker) to enable publish/subscribe communication across Raspberry Pi nodes (Pi A, B, and C)\n• Integrated Home Assistant as the control dashboard for monitoring device status and updating security settings remotely\n• Built a networked system with Wi-Fi LAN topology, configured and simulated using Cisco Packet Tracer`,
    images: []
  },
  {
    title: "ClearCare – Discharge Process Module",
    description: "A hospital discharge support system that helps doctors, patients, and caregivers manage post-discharge tasks such as home safety assessments, virtual consultations, and educational resources.",
    category: "Software Engineering",
    techStack: [
      ".NET Core", "C#", "MVC Architecture", "Software Design and Architecture",
      "Zoom API", "Email API", "SQL Server"
    ],
    details: `As part of the Software Design module, we built the Discharge Process module for the ClearCare platform, focusing on improving patient outcomes after hospital discharge. This module allows healthcare professionals to assess patient home environments, conduct virtual consultations, manage discharge summaries, and enable caregiver feedback and support.
  
  Key Features:
  • Home Safety Assessment via image uploads and doctor reviews  
  • Zoom-based Virtual Consultations with identity verification and recordings  
  • Patient/Caregiver Feedback System with doctor responses  
  • Community Hub and Resource Library for peer support and education  
  • Discharge Summary generator and sharing via Email  
  
  Software Design Focus:
  • Followed SOLID principles and used UML diagrams for architecture clarity  
  • Applied layered architecture with MVC pattern using .NET Core  
  • Used Rich Domain Model and Simple Domain Model where appropriate  
  • Integrated design patterns like Data Mapper, Unit of Work, and Data Gateway  
  • Ensured security, maintainability, and scalability were embedded in design  
    `,
    images: [],
    video: null
  }
  ,

  {
    title: "Software planning for a Coach Company Workload Management System",
    description: "Software design and documentation project for a coach staff workload management system. Focused on SDLC, UML design, software architecture, and requirement engineering.",
    category: "Software Engineering",
    techStack: ["UML 2.5", "SDLC", "Software Architecture", "Design Patterns", "Requirement Engineering", "Test Planning"],
    details: `As part of a 6-member team, I worked on the software design and documentation of a workload management system for NE Private Limited's coach staff. This project emphasized the Software Development Life Cycle (SDLC), focusing on requirements engineering, design patterns, and architectural planning rather than implementation.\n\nMy Contribution:\n• I contributed to the system design and modelling using UML 2.5 standards, helping define functional and non-functional requirements\n• I contributed to the job assignment logic within the system's business layer\n• I helped analyze and document sequence diagrams and design patterns such as the Observer Pattern used for real-time job updates\n\nKey Deliverables:\n• Comprehensive requirements specification, including functional, UI, and security requirements\n• UML Diagrams: Use Case, Class, Sequence, Activity, and Component\n• Hierarchical Layered Architecture design separating UI, logic, and data layers\n• Design patterns: Used Factory Pattern for user role instantiation and Observer Pattern for workload update notifications\n• Conducted black-box and white-box testing on method logic for job assignment and account management\n• Aligned project milestones with a structured SDLC, focusing on maintainability, scalability, and secure user access\n\nFocus Areas: SDLC, UML Design, Software Architecture, Requirement Engineering, Test Planning`,
    images: []
  },
  {
    title: "Workload Management Interface Design",
    description: "User-centric workload management interface design for coach company staff, following Design Thinking + HCI evaluation process. Focused on prototyping, user testing, and interface refinement.",
    category: "Software Engineering",
    techStack: ["HCI", "UX Design", "Heuristic Evaluation", "Think-Aloud Protocol", "User-Centered Design", "Design Thinking", "Paper Prototyping"],
    details: `As part of the Human-Computer Interaction module, my team designed a user-centric workload management interface for coach company staff, following a structured Design Thinking + HCI evaluation process across six studio assignments.\n\nMy Contribution:\n• I contributed to the prototyping and evaluation stages, helping storyboard user scenarios, build low-fidelity prototypes, and conduct heuristic and think-aloud evaluations\n• I also participated in formulating the implementation plan and refining the interface based on user feedback\n\nProject Process:\n• Needfinding: Conducted user research to understand job scheduling pain points\n• Prototyping: Sketched storyboards and developed paper and digital prototypes to explore task flows for availability updates, job rejections, and workload visualization\n• Evaluation: Applied both heuristic evaluation (predictive) and think-aloud (empirical) methods to identify usability issues\n• Implementation Planning: Designed an interface structure, logic flow, and UI elements for a simulated front-end system\n• Experimentation: Ran user testing on refined UI for final insights prior to project handoff`,
    images: []
  },




  
  {
    title: "YourPersonalTrainer — Android Fitness App",
    description: "Full-featured Android app that acts as a personal fitness trainer for users looking to lead healthier lifestyles. Features workout planning, progress tracking, motivational tools, and learning resources.",
    category: "Mobile Applications",
    techStack: ["Java", "SQLite", "Android Studio", "Android SDK", "Camera API", "WebView", "NotificationManager"],
    details: `Built a full-featured Android app that acts as a personal fitness trainer for users looking to lead healthier lifestyles. Key features include:\n\nWorkout planning: Users can create and customize their own workouts, track exercises, and use a built-in timer.\n\nProgress tracking: Progress photos stored via camera and displayed in a visual diary with BMI calculator.\n\nMotivational tools: Daily motivational quotes sent via notifications, goal tracking (current vs. target weight), and visual reminders.\n\nLearning resources: Curated fitness articles with in-app viewing using WebView and SQLite data storage.\n\nUser profile: Editable user data (name, weight) stored locally using SQLite.\n\nUI/UX: Smooth navigation using CardViews, RecyclerViews, Navigation Drawer, and splash screen with music.\n\nTech stack includes Java, SQLite, Android Studio, and native Android components like Camera, GridView, WebView, and NotificationManager. This project was developed to provide the benefits of a personal trainer—accessible for free, on the go.`,
    images: [
      yptHomeImage,
      yptWorkoutsImage
    ]
  },
  {
    title: "Recycling Game for Kids",
    description: "With a focus on applying OOP concepts, I developed an educational game developed in Java using LibGDX to encourage and educate kids on recycling through interactive gameplay.",
    category: "Game Development",
    techStack: ["Object-Oriented Programming", "Java", "LibGDX", "Eclipse"],
    details: `\n● Developed a game using Java in Eclipse Workspace to encourage and educate kids on recycling\n● The goal of the game is for the player to throw the recyclables into the correct recycle bin, while a monster is chasing the player. The player can also throw the recyclable item to the monster for added fun\n● Incorporated Object-Oriented Programming principles\n\nThis educational game combines entertainment with environmental awareness, teaching children about proper recycling practices through engaging gameplay mechanics.`,
    images: [
      oopgameImage
    ]
  }


];

export default projects;