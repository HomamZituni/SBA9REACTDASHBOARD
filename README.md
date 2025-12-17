Github Pages: https://homamzituni.github.io/SBA9REACTDASHBOARD/
Github Repo: https://github.com/HomamZituni/SBA9REACTDASHBOARD

Reflection
I built this app using React functional components and TypeScript for strong typing and clearer code. I used useState and useEffect to manage state and persist tasks in localStorage.

A challenge was handling filters, search, and sorting without breaking state. I solved it by creating pure utility functions that return new arrays instead of modifying the original state. The biggest challenge was the time crunch and having to deliver what I could within the amount of time I had. This kind of project, especially in TypeScript requires a lot more time than what was given. I prioritized functionality over perfection in this case. 

For component structure, the Dashboard holds the main task state, while TaskForm, TaskFilter, and TaskList manage their own UI states and communicate with Dashboard via props. This keeps the app modular and easy to maintain.



IN PROGRESS FIXES:
- Dark and Light Mode Fix
- More comprehensive documentation. 
