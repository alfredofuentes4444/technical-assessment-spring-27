# 🚂 Impact Team Technical Assessment Spring 2027 🚂

<div align="center">
<img width="813" height="228" alt="chaosmeter" src="https://github.com/user-attachments/assets/3b895059-9a8e-40ce-9161-d83c53dc20eb" />
</div>

Congratulations on reaching the next step of the application process! This phase is the most important one in the entire process, as it assesses your ability to create a web app using both tools you're familiar with and ones you probably aren't and will have to pick up as you go. This is one of the most important skills for a web developer to cultivate.   

By **Sunday, November 29th, 2026 at 11:59pm**, you must fork this repository and submit a PR (pull request) to this repository with both your completed version of the app and a screen recording of you walking me through your app's features.

# Your Task: The Boston Transit "Chaos Meter"
Living in Boston, anyone who relies on the T knows the daily suspense of wondering whether your train is two minutes away or stuck in a tunnel indefinitely. As BU students, we understand the constant headache of the green line being down for service every few days. I want to use this technical assessment as a chance for you to build a live transit dashboard that brings a little order to the chaos!

For this assessment, you will be building a Single Page Application (SPA) that visualizes real-time Boston transit data using the official MBTA V3 API ([https://api-v3.mbta.com](https://api-v3.mbta.com)). You can explore endpoints like `/vehicles` (live GPS coordinates and bearings), `/routes` (Red, Orange, Blue, Green, Silver, and Commuter Rail lines), `/alerts` (active delays and service disruptions), and `/predictions` (estimated arrival times). 

# Core Requirements
Your app must include the following features:
- The application should run on a single page without needing to reload the browser when switching between different views or tabs (e.g., Live Map, Service Alerts & Table, Line Analytics).
- An interesting and polished UI with a catchy title, an apt description, cool fonts, and responsive styling that looks great on any screen size. Leaning into the iconic MBTA color palette (Red, Orange, Blue, Green, and Commuter Rail Purple) with smooth transitions or subtle animations is strongly encouraged!
- Using React Leaflet (or a similar mapping library), render an interactive map centered on Greater Boston that displays live vehicle markers from the `/vehicles` endpoint. Clicking a vehicle marker should open a popup displaying details such as its route, direction, current status, and next stop.
- Successfully fetch and render live data from the MBTA V3 API, including a search bar or filter controls (e.g., filtering by transit line, route, or stop name) and a manual refresh button or auto-refresh toggle.
- Include at least one chart or graph (using libraries like Chart.js, Recharts, or D3) that visualizes insights pulled from the API—for example, a bar chart comparing active vehicles per subway line, a breakdown of active alerts by severity, or headway/delay trends.
- Deploy the frontend (and backend, if applicable) using some of the free deployment tools we talked about in the workshops!

# Extra Features
If you want to go above and beyond, try implementing some or all of these features!
- Query the `/shapes` endpoint to draw the actual subway or bus route lines onto your map beneath the live moving vehicles.
- Instead of standard interval polling, leverage the MBTA V3 API's built-in Server-Sent Events (text/event-stream) support to stream live vehicle updates as they happen.
- Add a backend (such as Node.js/Express with MongoDB or PostgreSQL) or local storage persistence so users can bookmark their daily commute stops and view a dedicated "My Commute" view with live arrival countdowns.

**If you don't finish everything on time, just submit what you have. Partial submissions will still be considered. Please try to give yourself adequate time to work on this project, though. Start it as early as you can!**

## Things to Consider
This task is tough and time-intensive! Try your best with it. I am really excited to see what you come up with. Please start working on it early, and budget your time well. I am going to be strict about the deadline.

I highly encourage you to take this opportunity to learn about and use web development tools that you are not familiar with. One of the most important skills as a web developer is to be able to understand and read documentation. Submissions that go beyond what we covered in JDT will be valued higher, but you must understand your code! You will be asked about it during your interview, if you reach that step.

I have a few pieces of advice for you:
- Don't skimp out on the frontend. I want your sites to look pretty, so really make an effort to give them a nice visual aesthetic. You are welcome to use a UI library such as [Material UI](https://mui.com/material-ui/all-components/).
- Feel free to use my technical assessment when I applied for Impact Team, [Dawn2Dusk](https://dawn2dusk.netlify.app/), as a model and a guide for you. It has some of the features we didn't cover in the JDT workshops, such as multiple pages, so feel free to copy my main.jsx code from there when working to implement that. You can access the code for it [here](https://github.com/nicolajack/dawn2dusk).
  
Most importantly, try your best to just make something you're proud of! **If you're unable to implement every feature of the site, that's okay, just submit whatever you have.** Please really try to give yourself the time you need to work on it, though.

## A Note on LLMs
You are welcome to use LLMs to help you with anything you need for this project. However, please make sure you understand any code produced by a LLM that you use, since I may be asking you about your code during the interview, if you are invited to it.

## Good Luck!
I'm really excited to see what you produce! Try your best with it and don't worry if you can't figure out everything. Submit whatever you have as a PR following the template in [pr_template.md](pr_template.md). I hope you enjoy working on this and feel proud enough of it to use it as a project or a demo of your abilities on your portfolio :)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
