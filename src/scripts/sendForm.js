const URL = "https://feedback-server-4xz7.onrender.com/api/registration";
const form = document.getElementById("form");

async function sendForm() {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: new FormData(form),
      headers: {"Content-Type": "multipart/form-data"},
    });
    const data = await response.json();
    alert(data.message);
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendForm();
});
