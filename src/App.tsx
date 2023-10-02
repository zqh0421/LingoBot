import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currentHost = window.location.host;
  const correntHostSplit = currentHost.split('.')
  let backendUrl = ''
  if (correntHostSplit[correntHostSplit.length - 2]) {
    const newHost = currentHost.replace(/^5173/, "3128");
    backendUrl = `${window.location.protocol}//${newHost}${window.location.pathname}${window.location.search}${window.location.hash}`;
  } else {
    // 假设当前的 URL 是 https://5000-yourworkspace.ws-eu45.gitpod.io
    const currentUrl = new URL(window.location.href);
    // 更改端口号
    currentUrl.port = '3128';
    backendUrl = currentUrl.toString();
  }
  fetch(
    backendUrl+'', {
      method: "GET",
      credentials: "include",  // This is important!
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </>
  )
}

export default App
