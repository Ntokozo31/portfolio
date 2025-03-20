// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })
})

// Theme toggle
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = themeToggle.querySelector("i")

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
    localStorage.setItem("theme", "dark")
  } else {
    themeIcon.classList.remove("fa-sun")
    themeIcon.classList.add("fa-moon")
    localStorage.setItem("theme", "light")
  }
})

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode")
  themeIcon.classList.remove("fa-moon")
  themeIcon.classList.add("fa-sun")
} else if (savedTheme === "light") {
  document.body.classList.remove("dark-mode")
  themeIcon.classList.remove("fa-sun")
  themeIcon.classList.add("fa-moon")
}

// Tabs functionality
const tabButtons = document.querySelectorAll(".tab-button")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Add active class to clicked button and corresponding content
    button.classList.add("active")
    const tabId = button.getAttribute("data-tab")
    document.getElementById(`${tabId}-tab`).classList.add("active")
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

// Add animation on scroll
const animateOnScroll = () => {
  const sections = document.querySelectorAll(".section")

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1"
      section.style.transform = "translateY(0)"
    }
  })
}

// Initial styles for animation
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
})

// Run animation on load and scroll
window.addEventListener("load", animateOnScroll)
window.addEventListener("scroll", animateOnScroll)