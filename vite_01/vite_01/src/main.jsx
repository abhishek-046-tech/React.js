import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Abb from './abb.jsx'


function MyApp() {
  const name = "Abhishek"
  return (
    <>
    <div>
      <h1>Custom App | You are my {name} inspiration as all</h1>
      <h2>kkkjhj</h2>
    </div>
    </>
  )
}

/* react structure to add elements */
const reactElement = React.createElement(
  "a",
  {href:'https://Google.com', target: '_blank'},
  "Click and see free google"

)

/* react structure to add elements */

ReactDOM.createRoot(document.getElementById('root'))
.render(
  reactElement
)

/*

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <reactElement />
      <Abb />
      <MyApp />
    </>
  </React.StrictMode>,

)

*/


// All commands:

//     access, adduser, audit, bugs, cache, ci, completion,
//     config, dedupe, deprecate, diff, dist-tag, docs, doctor,
//     edit, exec, explain, explore, find-dupes, fund, get, help,
//     help-search, hook, init, install, install-ci-test,
//     install-test, link, ll, login, logout, ls, org, outdated,
//     owner, pack, ping, pkg, prefix, profile, prune, publish,
//     query, rebuild, repo, restart, root, run-script, sbom,
//     search, set, shrinkwrap, star, stars, start, stop, team,
//     test, token, uninstall, unpublish, unstar, update, version,
//     view, whoami