# Module 9B - Custom Profile Component

## Description
This is a React app built with Vite. It contains a profile component styled with inline CSS.

## What I Learned
- How to use JSX
- How to style with inline CSS
- How to create and render functional components
- How to pass data into a component using props

## Challenges
One of the challenges I ran into was a naming mismatch. When I first ran npm create vite@latest, I used the placeholder name instead of the actual project name, so the folder got created as your-project-name. I had to stop the dev server and rename the folder with mv before continuing.

I also hit a connection refused error when trying to view the app in the browser. The dev server had stopped running in the terminal, so the page couldn't load. Restarting it with npm run dev fixed it.

For styling, getting the profile photo to crop into a clean circle took some adjusting. Just setting borderRadius: "50%" wasn't enough on its own, the image would stretch. Adding objectFit: "cover" fixed it by cropping the image to fill the circle properly instead of squishing it.

## Screenshot
[Add screenshot here]