# MindCare

## *Project Description*
MindCare is a mental health support app that offers a unique blend of technology and human-like interaction. Leveraging the power of OpenAI’s ChatGPT, the app provides users with AI-driven support that mimics the experience of speaking to a psychiatrist. Users can track their emotional well-being, receive personalized support, and explore mental health resources, all in a confidential and secure environment. The app aims to make mental health support more accessible and convenient for everyone.

## *FOL Group ID*
S1G6

## *Group Members*
- Adnan
- Qusai
- Tanveer
- Meet

## *Data Source*
The core data source for MindCare is based on user input and interactions with ChatGPT. This data is processed via OpenAI’s GPT API, which serves as the brain behind the chatbot feature. Some user-specific data, such as emotional history and app settings, is stored locally for convenience. The app requires an internet connection for chatbot interactions but allows offline usage for some non-chat functionalities.

Data Source Type: Multi-user input (Hard)

## *App Features*
1. *Chatbot Interaction*: Users can chat with the AI-powered chatbot, which provides emotional support and advice based on their input.
2. *Real-time Response*: The chatbot delivers responses in real-time, mimicking the conversational style of a mental health professional.
3. *Sentiment Analysis*: The chatbot will analyze the sentiment of user input and adjust responses accordingly (e.g., offering calming advice for anxious inputs).
4. *Daily Mood Logging*: Users can log their mood daily, which is tracked over time and visualized in a chart.
5.⁠ ⁠*Personalized Mental Health Resources*: Users receive personalized mental health resources based on their chat history and emotional state.
6.⁠ ⁠*Mental Health Check-ins*: Users can schedule regular check-ins where the chatbot asks about their emotional state.
7.⁠ ⁠*Reminders for Self-care*: Users can set reminders for activities like meditation, exercise, or journaling, which help improve mental well-being.
8.⁠ ⁠*Anonymized Data Sharing*: Users can choose to share anonymized data for research purposes, with full control over what gets shared.
9.⁠ ⁠*Dark Mode*: Users can switch between light and dark mode to customize the app’s appearance according to their preferences.
10.⁠ ⁠*In-app Notifications*: Users receive notifications about upcoming check-ins or important mental health reminders directly within the app.
11.⁠ ⁠*Tutorial and Onboarding*: New users are guided through an in-app tutorial, showing how to interact with the chatbot and log their emotions.
12.⁠ ⁠*Security and Privacy Settings*: Users can adjust security settings, such as enabling or disabling biometric login for the app.
13. *Emotional State History Visualization*: Users can view their emotional state over time in a chart, providing insight into patterns in their mood.
14. *Customizable User Profile*: Users can set up and customize their profile with preferences such as preferred chat topics, response style, and app themes.
15. *Favorite Chat Excerpts*: Users can save key parts of their chat conversations with the AI that they find helpful, and revisit them later.
16. *Offline Mode*: Some non-chat features, such as viewing saved mental health resources and logs, can be accessed in offline mode.
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