# Putting Lighthouse on GitHub and getting a live link

No coding or command line needed — just clicking and dragging. Takes about 5 minutes.

## Step 1 — Create a free GitHub account

Go to [github.com](https://github.com) and sign up, if you don't already have an account.

## Step 2 — Create a new repository

1. Click the **+** icon in the top right, then **New repository**.
2. Name it something like `lighthouse-app`.
3. Leave it set to **Public** (this is what lets GitHub Pages host it for free — see the note below if you'd rather keep the code private).
4. Click **Create repository**.

## Step 3 — Upload the files

1. On your new (empty) repository page, click **uploading an existing file**.
2. On your computer, unzip the file I gave you (`lighthouse-app.zip`) into a folder.
3. Drag the whole folder's contents — `index.html`, `manifest.json`, `sw.js`, `README.md`, `DEPLOY.md`, and the `icons` folder — onto the GitHub upload page.
4. Scroll down, add a short message like "Initial commit," and click **Commit changes**.

## Step 4 — Turn on GitHub Pages (your free live link)

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under "Branch," choose **main** and folder **/ (root)**, then click **Save**.
4. Wait about a minute, then refresh the page — GitHub will show you a live web address, something like:
   `https://your-username.github.io/lighthouse-app/`
5. Open that link on your phone — you can now "Add to Home Screen" and it behaves like a real installed app.

## A note on privacy of the source code

A free GitHub Pages site requires the repository to be **public**, meaning anyone can view the code — including the hand-researched hospital, embassy, and city data. For an early prototype this is usually fine (nothing here is a trade secret that matters yet). If that ever changes — for example, once you've built something more differentiated and worth protecting — you can keep the repository **private** and instead deploy the same files for free via a host like Netlify, which doesn't require the source to be public.

## Updating the app later

Whenever I (or you) make changes to the app, repeat Step 3 — GitHub lets you drag updated files onto an existing repository the same way, and it keeps a full history of every version.
