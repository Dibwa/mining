
console.log("Service Worker Loaded...");
const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
// self.addEventListener("push", e => {
//   const data = e.data.json();
//   console.log("Push Recieved...");
//   self.registration.showNotification(data.title, {
//     body: "Notified by Traversy Media!",
//     icon: "http://image.ibb.co/frYOFd/tmlogo.png"
//   });
// });
console.log("chikala")




const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

const saveSubscription = async (subscription, data) => {
  //http://localhost:600/subscribe
  // https://www.pos.zilogistics.com/subscribe
  const response = await fetch('https://www.pos.zilslogistics.com/subscribe', {
    method: 'POST',
    headers: { 'Content-type': "application/json" },
    body: JSON.stringify({ sub: subscription, data: data })
  })

  return response.json();
}
self.addEventListener("install", async (e) => {

  skipWaiting()
})

self.addEventListener("activate", async (e) => {

  clients.claim()
});

self.addEventListener("push", e => {
  console.log(e)


  self.registration.showNotification(e.data.json().title, { icon: "./images/zils_formal_logo.jpg", body: e.data.json().body, actions: [{ action: "view", title: "View" }, { action: "close", title: "Close" }] })
})


// self.addEventListener("fetch", e => {
//     // console.log(e)

//         
//    })

// service-worker.js
// On the Service Worker side we have to listen to the message event
self.addEventListener('message', async (event) => {
  if (event.data && event.data.type === 'MESSAGE_IDENTIFIER') {
    // do something
    console.log("gamito")

    const subscription = await self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })

    const response = await saveSubscription(subscription, event.data)
    console.log(response)
  }
});