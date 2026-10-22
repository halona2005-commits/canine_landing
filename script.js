
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Prevent placeholder social links from jumping to the top.
  // Replace their href="#" values in index.html
  // with your real profile URLs when you're ready.
  const socialLinks = document.querySelectorAll("[data-social]");

  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  });

  // Gently reveal the page content when it loads.
  document.body.classList.add("page-ready");
});
