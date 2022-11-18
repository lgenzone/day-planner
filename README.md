# Day Planner 

 ## Description

 Testing

 The Day Planner is a simple yet effective calendar application that allows users to save events for each hour of the day. The application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

 The Day Planner is a tool that aims to assist users with organizing their daily tasks for the day in one convenient location.

 This project gave me the opportunity to practice my newly acquired coding skills. Through the process of creating the Day Planner application, I've become more familiar with jQuery, Day.js, and working with local storage.

 ## Installation 

 There is no installation required for the Day Planner Application. To access the webpage, click the deployed URL link in "Usage" section. Users may store and clear daily tasks by accessing local storage. 

 ## Usage 

 To access the webpage, click the deployed URL link below: 
 https://lgenzone.github.io/day-planner/ 

 Hour blocks are displayed from 9 a.m. to 5 p.m. Hour blocks are colored based on past(grey), present(red), and future(green).
 
To add a a task, simply select the desired hour block and type the desired task. Then, clickl the save button located to the right of the hour block. 

If the page is refreshed or if the user leaves the page, tasks will still be displayed. 

Follow the steps below to access and clear local storage. 

View local storage: 
1. Open DevTools: windows (ctrl, shift, I), macOS (option, command, I)
2. Select "Application" from navigation bar 
3. Locate "Storage" on the left of the DevTools screen, and select "Local Storage"

Clear local storage: 
1. Click clear icon at the top right of the page 
OR
2. Type the following command into the console: localStorage.clear()

<img width="1361" alt="day-planner-webpage-screenshot" src="https://user-images.githubusercontent.com/113480175/202308073-1434b164-6bda-42e7-9bb4-a34183a16205.png">

## License 

Please refer to the repo.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria 

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner

THEN the current day is displayed at the top of the calendar

WHEN I scroll down

THEN I am presented with time blocks for standard business hours

WHEN I view the time blocks for that day

THEN each time block is color-coded to indicate whether it is in the 
past, present, or future

WHEN I click into a time block

THEN I can enter an event

WHEN I click the save button for that time block

THEN the text for that event is saved in local storage

WHEN I refresh the page

THEN the saved events persist





