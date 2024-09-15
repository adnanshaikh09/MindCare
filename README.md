# MindCare

## *Project Description*
MindCare is a mental health support app that offers a unique blend of technology and human-like interaction. Leveraging the power of OpenAI’s ChatGPT, the app provides users with AI-driven support that mimics the experience of speaking to a psychiatrist. Users can track their emotional well-being, receive personalized support, and explore mental health resources, all in a confidential and secure environment. The app aims to make mental health support more accessible and convenient for everyone.

## *FOL Group ID*
S1G6

## *Group Members*
- Adnan
- Qusai

## *Data Source*
The core data source for MindCare is based on user input and interactions with ChatGPT. This data is processed via OpenAI’s GPT API, which serves as the brain behind the chatbot feature. Some user-specific data, such as emotional history and app settings, is stored locally for convenience. The app requires an internet connection for chatbot interactions but allows offline usage for some non-chat functionalities.

Data Source Type: Multi-user input (Hard)

## *App Features*
1. *Chatbot Interaction*: Users can chat with the AI-powered chatbot, which provides emotional support and advice based on their input.
2. *Real-time Response*: The chatbot delivers responses in real-time, mimicking the conversational style of a mental health professional.
3. *Sentiment Analysis*: The chatbot will analyze the sentiment of user input and adjust responses accordingly (e.g., offering calming advice for anxious inputs).
4. *Daily Mood Logging*: Users can log their mood daily, which is tracked over time and visualized in a chart.

---

## *Setup Instructions*
1. Clone the repository to your local machine.
2. Install dependencies:
   bash
   npm install
   
3. Run the development server:
   bash
   npm start
   
4. Access the app on your emulator or mobile device.

## *Tech Stack*
- *Frontend*: React Native
- *Backend*: Django REST API
- *AI Integration*: OpenAI GPT API (Chatbot)
- *Database*: SQLite (for local data storage)