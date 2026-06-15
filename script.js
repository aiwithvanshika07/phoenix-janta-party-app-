const quotes = [
  "A Phoenix never fears fire, because fire becomes the reason for its rebirth.",
  "Don’t live like a cockroach in fear. Rise like a Phoenix with courage.",
  "The youth who builds skills today will build the nation tomorrow.",
  "Excuses destroy dreams. Discipline creates destiny.",
  "A strong mindset is the first step toward a strong Bharat.",
  "Failure is not the end. It is the training ground of winners.",
  "Rise, transform, lead — this is the Phoenix way."
];

function newQuote() {
  const quoteText = document.getElementById("quoteText");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `“${quotes[randomIndex]}”`;
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for joining Phoenix Janta Party movement! 🔥");
  event.target.reset();
}

async function shareApp() {
  const shareData = {
    title: "Phoenix Janta Party App",
    text: "Join the Phoenix Janta Party movement. GenZ Are Phoenixes, Not Cockroaches!",
    url: "https://www.phoenixjanataparty.org"
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log("Sharing cancelled", error);
    }
  } else {
    navigator.clipboard.writeText(shareData.url);
    alert("Website link copied!");
  }
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.style.display = "inline-block";
});

installBtn.addEventListener("click", async function() {
  if (!deferredPrompt) {
    alert("Open this website in Chrome and use Add to Home Screen.");
    return;
  }

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.style.display = "none";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(function() {
        console.log("Service Worker registered successfully");
      })
      .catch(function(error) {
        console.log("Service Worker registration failed:", error);
      });
  });
                        }
