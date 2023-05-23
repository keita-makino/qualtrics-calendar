# qualtrics-calendar

A react-based component that displays a calendar component in [Qualtrics](https://www.qualtrics.com).

## Features

- Collection of multiple date, time, or datetime responses in one question.
  - e.g., "From:" and "To:"

---

![Example](example.gif)

---

# Installation

## Header Settings

1. In the survey edit screen, click "Look & Feel" on the top-right.
1. Select the "General" tab and then edit the "Header".
1. Click the "<>" icon to enter the coding view.
1. Copy and paste the following code.

```javascript
<script src="https://cdn.jsdelivr.net/gh/keita-makino/qualtrics-calendar@0.2.3/dist/bundle.js"></script>
```

## Use It

1. The question type has to be set to "Form field".
1. Click the question text and click "Rich Content Editor...".
1. Click the {A} button at the top-left and click "Survey Question".
1. Search this question and click "Question Text".
1. A code `${q://"Some ID"/QuestionText}` will be inserted so save the ID for later use.
1. Edit the text fields on the rows/columns as you need.
1. Select the "JavaScript" option from the side menu or click </> icon next to the question text to enter the coding view.
1. Copy and paste the code below. Please select one of the date, time, or datetime options.
1. **All done!**

```javascript
Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/
});

// If you need just the date
Qualtrics.SurveyEngine.addOnReady(function () {
  calendarRender(
    document.getElementById(
      'The question ID, make sure the ID is surrounded by the double-quotation',
      'date'
    )
  );
});

// If you need just the time
Qualtrics.SurveyEngine.addOnReady(function () {
  calendarRender(
    document.getElementById(
      'The question ID, make sure the ID is surrounded by the double-quotation',
      'time'
    )
  );
});

// If you need both the date and time
Qualtrics.SurveyEngine.addOnReady(function () {
  calendarRender(
    document.getElementById(
      'The question ID, make sure the ID is surrounded by the double-quotation',
      'datetime'
    )
  );
});

Qualtrics.SurveyEngine.addOnUnload(function () {
  /*Place your JavaScript here to run when the page is unloaded*/
});
```
