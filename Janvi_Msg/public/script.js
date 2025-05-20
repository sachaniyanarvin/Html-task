function checkPassword() {
    const nickname = document.getElementById("nickname").value.trim().toLowerCase();
    const secret = "daku mangal singh";
  
    if (nickname === secret) {
      window.location.href = "message.html";
    } else {
      document.getElementById("error").innerText = "Oops! That doesn't seem right 💔 Try again.";
    }
  }
  