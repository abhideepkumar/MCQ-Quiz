# Quiz Web App with Next.js, MongoDB and Tailwind CSS

## Overview

This is a quiz web application built using Next.js,Tailwind CSS and Mongodb. The application allows participants to take a quiz consisting of multiple-choice questions (MCQs) on the topic of startups. Each question has four options, with only one correct answer. The participants can also provide their personal details, such as name, email, and USN number, before starting the quiz. The quiz is timed, with 15 seconds allotted for each question. After completing the quiz, the participants can view their score which will be saved to Mongodb server.

## Features

1. User Registration: Participants can provide their name, email, and USN number before taking the quiz.
2. Quiz Timer: Each question is timed, and participants have 15 seconds to answer each question.
3. Multiple-Choice Questions: The quiz consists of multiple-choice questions with four options, only one of which is correct.
4. Scoring: Each question has a score of 10 points for a correct answer.
5. Result Display: After completing the quiz, the participants can see their total score which will be stored in Mongodb Database.

## How it Works

### Participant Flow:

1. The participant visits the website and fills in their personal details on the homepage.
2. After submitting the details, the quiz starts, and the first question is displayed.
3. The participant selects the answer from the given options within the given time (15 seconds).
4. After answering all the questions, the participant's total score is displayed on the result page.


## Project Setup

1. Clone the repository: `git clone https://github.com/abhideepkumar/mcq-quiz/`
2. Navigate to the project directory: `cd mcq-quiz`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Access the app in your web browser at `http://localhost:3000`

## Dependencies

The following major dependencies were used in building this project:

- Next.js: A React framework for building server-side rendered and statically generated applications.
- Tailwind CSS: A utility-first CSS framework for building responsive and modern user interfaces.
- Mongodb: A database management framework

## Credits

This project was created by [Abhideep Kumar](https://github.com/abhideepkumar).