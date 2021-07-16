// Select active navbar link
document
  .querySelector(`nav a[href^="/${location.pathname.split("/")[1]}"]`)
  ?.classList.add("active");

// Show cookie notification
if (!localStorage.getItem("disable_cookie_notification")) {
  setTimeout(() => {
    document.querySelector("#cookie-toast").classList.add("visible");
  }, 2000);
}

const toasts = document.querySelectorAll(".toast");
toasts.forEach((toast) => {
  toast.addEventListener("click", () => {
    closeToast(toast.id);
  });
});

function closeToast(id) {
  document.querySelector(`#${id}`).classList.remove("visible");

  if (id.includes("cookie"))
    localStorage.setItem("disable_cookie_notification", true);
}

function showToast(id) {
  const toast = document.querySelector(`#${id}`);
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 7500);
}
