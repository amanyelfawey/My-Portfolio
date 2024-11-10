function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


function openDialog(dialogId) {
  document.getElementById(dialogId).style.display = "flex";
}

function closeDialog() {
  document.querySelectorAll(".dialog-overlay").forEach(dialog => {
      dialog.style.display = "none";
  });
}

