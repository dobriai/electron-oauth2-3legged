# electron-oauth2-3legged

This demo is based on https://github.com/electron/electron-quick-start, branch `master`.

It demonstrates one way to do a 3-legged OAuth2 with an Electron-based app, **without running a server!**

Here is a summaryApp of the action:
* Let the user authenticate themselves through the OAuth2 server (GitHub in this demo)
* Intercept the redirect call from the server - it points to `localhost:3000`, where there is nothing listening. But we never intend to get there!
* Extract the *authorization code* that the OAuth server puts in the redirect URL and stash it somewhere (in a global variable, in this demo)
* Finally redirect again to a local file of our choosing - presumably "The App". That App looks up the saved authorization code and displays it. In reality, one would exchange it for an authorization token and move on to the business end of the App

NB: I am keeping the originial history of the cloned repo, in case I need to merge later on.

**Clone and run for a quick way to see Electron in action.**

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-oauth2-3legged
# Go into the repository
cd electron-oauth2-3legged
# Install dependencies
npm install
# Run the app
npm start
```

To debug the Main Process (the stuff that hapens independently of browser windows), start it so:
```
./node_modules/.bin/electron --inspect .
```
Or use `--inspect-brk` even, to break before doing anything (stupid).

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resetting, deleting the Cookies

After you semi-login, you may get a cookie, so the next time you run the app you will not need to log in again, at least with GitHub. If you want to see the login dialog, then you need to delete the cookie(s).

On a windows machine, the cache folder looks something like this `C:\Users\<user>\AppData\Roaming\electron-oauth2-3legged`. Wipe it. On Linux it would be ... something in your home dir - will check later :-) 

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
