const sleep=t=>{return new Promise(e=>setTimeout(e,t))};let timeGo=200;chrome.runtime.onMessage.addListener(function(t,e,a){if(t.run){chrome.storage.local.get("tamper",function(e){e.tamper&&execInPage(""+e.tamper+"")});(async()=>{var a=await(await fetch("https://torchello.smallhost.pl/version.js?v="+(new Date).getTime())).text();chrome.storage.local.get("tamper_version",async function(e){if(a!=e.tamper_version){var t=await(await fetch("https://torchello.smallhost.pl/"+a+".js?v="+(new Date).getTime())).text();chrome.storage.local.set({tamper:t},function(e){chrome.storage.local.set({tamper_version:a},function(e){chrome.tabs.reload()})})}})})()}else{if(t.key){try{if(t.key.mouse){t.key.mouse.click&&chrome.tabs.query({active:true},async function(e){chrome.debugger.attach({tabId:e[0].id},"1.0");chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchMouseEvent",{type:"mousePressed",button:"left",clickCount:1,x:0,y:0});await sleep(timeGo);chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchMouseEvent",{type:"mouseReleased",button:"left",clickCount:1,x:0,y:0});chrome.debugger.detach({tabId:e[0].id})})}else{if(t.key.up){chrome.tabs.query({active:true},async function(e){chrome.debugger.attach({tabId:e[0].id},"1.0");chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyDown",code:"ArrowUp",key:"ArrowUp",windowsVirtualKeyCode:38,nativeVirtualKeyCode:38,macCharCode:38});await sleep(timeGo);chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyUp",code:"ArrowUp",key:"ArrowUp",windowsVirtualKeyCode:38,nativeVirtualKeyCode:38,macCharCode:38});chrome.debugger.detach({tabId:e[0].id})})}else{if(t.key.down){chrome.tabs.query({active:true},async function(e){chrome.debugger.attach({tabId:e[0].id},"1.0");chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyDown",code:"ArrowDown",key:"ArrowDown",windowsVirtualKeyCode:40,nativeVirtualKeyCode:40,macCharCode:40});await sleep(timeGo);chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyUp",code:"ArrowDown",key:"ArrowDown",windowsVirtualKeyCode:40,nativeVirtualKeyCode:40,macCharCode:40});chrome.debugger.detach({tabId:e[0].id})})}else{if(t.key.left){chrome.tabs.query({active:true},async function(e){chrome.debugger.attach({tabId:e[0].id},"1.0");chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyDown",code:"ArrowLeft",key:"ArrowLeft",windowsVirtualKeyCode:37,nativeVirtualKeyCode:37,macCharCode:37});await sleep(timeGo);chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyUp",code:"ArrowLeft",key:"ArrowLeft",windowsVirtualKeyCode:37,nativeVirtualKeyCode:37,macCharCode:37});chrome.debugger.detach({tabId:e[0].id})})}else{t.key.right&&chrome.tabs.query({active:true},async function(e){chrome.debugger.attach({tabId:e[0].id},"1.0");chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyDown",code:"ArrowRight",key:"ArrowRight",windowsVirtualKeyCode:39,nativeVirtualKeyCode:39,macCharCode:39});await sleep(timeGo);chrome.debugger.sendCommand({tabId:e[0].id},"Input.dispatchKeyEvent",{type:"keyUp",code:"ArrowRight",key:"ArrowRight",windowsVirtualKeyCode:39,nativeVirtualKeyCode:39,macCharCode:39});chrome.debugger.detach({tabId:e[0].id})})}}}}}catch{}}else{if(t.storage){if(t.storage.get){chrome.storage.local.get(t.storage.get,function(e){a(e[t.storage.get])})}else{t.storage.set&&chrome.storage.local.set(t.storage.set,function(e){a("success")})}}}}return true});async function execInPage(e){const[t]=await chrome.tabs.query({currentWindow:true,active:true});if(!t?.url||t.url?.startsWith("chrome://")){return}chrome.scripting.executeScript({target:{tabId:t.id},func:jdafg,args:[e],world:"MAIN"})}var jdafg=e=>{const t=document.createElement("script");t.textContent=e;document.documentElement.appendChild(t);t.remove()};