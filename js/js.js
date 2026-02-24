function toggleShare() {
  const popup = document.getElementById("sharePopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function copyLink() {
  const link = "https://christosangeet.com/download/";
  navigator.clipboard.writeText(link).then(() => {
    alert("Link copied to clipboard!");
  });
}

function showGuide() {
  document.getElementById("installGuide").style.display = "block";
}

// Fetch dynamic download link and version
fetch("https://christosangeet.com/downloads/latest.json?t=" + new Date().getTime())
  .then(response => response.json())
  .then(data => {
    const downloadUrl = data.url;
    const version = data.version;

    // Set download link
    document.querySelectorAll(".downloadBtn").forEach(btn => {
      btn.setAttribute("href", downloadUrl);
    });

    // Show version
    if (version) {
      document.querySelectorAll(".versionInfo").forEach(el => {
        el.innerText = "Version: " + version;
      });
    }
  })
  .catch(error => {
    console.error("Download info load failed", error);
    alert("ডাউনলোড লিংক লোড করতে সমস্যা হয়েছে।");
  });