🔄 npm run reset-project
This command is used to reset your Expo project to a clean state. It helps resolve issues like broken builds, unexpected errors, or stale caches.

🔧 What It Does
When you run:

bash
Copy
Edit
npm run reset-project
It typically performs the following actions (based on the configured script):

Clears Metro bundler cache

Clears watchman cache (if applicable)

Deletes node_modules folder

Deletes package-lock.json

Reinstalls all dependencies

Restarts the Expo server with a fresh cache

This is helpful when your app behaves unexpectedly or fails to start due to caching issues.

✅ What You Will Observe
A fresh install of all packages

Expo will start a new development server

Your project loads cleanly on the device/emulator

Any previous errors caused by stale code or dependencies may be resolved

🧼 Example Script in package.json
If you don't have it yet, you can add this in your package.json:

json
Copy
Edit
"scripts": {
  "reset-project": "rm -rf node_modules package-lock.json && npm install && expo start -c"
}
Note: For Windows, use the equivalent command:

json
Copy
Edit
"reset-project": "rd /s /q node_modules && del package-lock.json && npm install && expo start -c"