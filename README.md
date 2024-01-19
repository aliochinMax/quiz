# Quiz-app

Author: Maksim Aliochin

# ![License Badge](https://shields.io/badge/license-MIT-green)

## Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Screenshots Of Use](#screenshots-of-use)
- [Requirments for the application](#requirments-for-the-application)

## Description

A timed quiz about Front-end development, with a highscore leaderboard (Stored in user's cache).

## How To Use

To use go to [the deployed site link], if you wish to edit the what you wish to include questions go to questions.js (should really be a json file), follow the syntax presented, remember that the correctAnswerIndex begins at 0.

## Screenshots Of Use

![Landing Page with quiz start button](assets\landingpage.png)
![Highscores page](assets\highscores.png)
![Quiz finish page with initals entry for highscore](assets\Initials.png)
![Question with 4 buttons that can be used to answer](assets\question.png)

## Requirments for the application

### Your Task

As you proceed in your journey to becoming a front-end web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges.

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework has taught you all the skills you need to succeed in this challenge.

### User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

### Acceptance Criteria

Create a code quiz that contains the following requirements:

- A start button that when clicked a timer starts and the first question appears.

  - Questions contain buttons for each answer.
  -
  - When answer is clicked, the next question appears
  -
  - If the answer clicked was incorrect then subtract time from the clock

- The quiz should end when all questions are answered or the timer reaches 0.

  - When the game ends, it should display their score and give the user the ability to save their initials and their score

### Mock-Up

The following animation demonstrates the application functionality:

![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](./assets/08-web-apis-challenge-demo.gif)
