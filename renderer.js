// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const authURL = 'https://github.com/login/oauth/authorize';
const client_id = '32ab2284d2b46af944c6';
const redirect_uri = 'http://localhost:3000/login/github/return&state=';
const state = '64b8ebf5d66c'; // random state

const fullAuthURL = `${authURL}?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;

const useIFrames = false;

if (useIFrames) {
  const iframe = document.createElement('iframe');
  iframe.src = fullAuthURL;
  iframe.width = 500;
  iframe.height = 400;
  document.body.appendChild(iframe);
}
else {
  const aa = document.createElement('a');
  aa.href =  fullAuthURL;
  aa.innerHTML = `Login with ${authURL}`;
  document.body.appendChild(aa);
}
