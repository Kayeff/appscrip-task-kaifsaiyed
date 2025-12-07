## Appscrip task - Kaif Saiyed

Link: https://appscrip-task-kaifsaiyed.vercel.app/

### A functional Next.js e-commerce app with just HTML & CSS which is both functional and responsive.

This project was a task given by Appscrip with a figma file and some functional and responsive requirements. The page is hosted on Vercel as is created with Next.js which comes out of the box optimizations for Next.js. Every part of this project shows how to do the following:

- Create a Next.js project with create-next-app@latest
- State Management using Redux JS (Redux Toolkit).
- Styling using CSS Modules.
- Minimum use of pre-built packages.
- Manage versions using Git and Github

### Issues faced

- I have less frequently used Next.js with CSS Modules, mostly preferred Tailwind CSS.
- When starting the task as mentioned in the mail, I started coding it on just Vanilla HTML & CSS. So it took some of my time.
- Deployment error due to FakestoreAPI not validating the proxy of Next.js because I have called it on React Server Components which runs on server.

### Solved

- Implemeted by learning documentation.
- Worked on it for more than 8 hours as to contemplate the time spent.
- There were 2 scenarios
  1. Switch to a Client Component and call the api from client.
  2. Use another free dummy API other than FakestoreAPI that accepts the proxy.
- I used the first option as there was no time for changing the data model of the previous api to new api. It is deployed on Vercel and works seamlessly.
