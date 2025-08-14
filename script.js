console.log("Welcome to Zetu's Portfolio!");


const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !email || !msg) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Message sent successfully!";
    message.style.color = "green";
    form.reset();
  }
});

window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

const text = [
  "Aspiring Front-End Developer",
  "Creative UI Designer",
  "React & Tailwind Enthusiast",
];
let i = 0,
  j = 0,
  currentText = "",
  isDeleting = false;

function type() {
  currentText = text[i];
  let display = currentText.substring(0, j);
  document.getElementById("typewriter").textContent = display;

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 1000);
  }
}

type();

function openModal(title, desc) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

const username = "Ze2lucy";

fetch(`https://api.github.com/users/${username}/repos`)
  .then((res) => res.json())
  .then((data) => {
    const repoList = document.getElementById("repoList");
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      repoList.appendChild(li);
    });
  })
  .catch((err) => console.error("GitHub API error:", err));
  function setTheme(theme) {
    document.body.className = theme;
  }

  
timelineData.forEach(item => {
    const container = document.getElementById("timelineContainer");
  
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
  
    timelineItem.innerHTML = `
      <div class="text-blue-600 font-bold mb-2">${item.year}</div>
      <h3 class="text-xl font-semibold">${item.title}</h3>
      <p class="mt-2 text-gray-700">${item.description}</p>
    `;
  
    container.appendChild(timelineItem);
  });


  projects.forEach((project) => {
    const grid = document.getElementById("projectGrid");

    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-700 mb-4">${project.description}</p>
        <a href="${project.link}" target="_blank" class="text-blue-600 hover:underline">View Project →</a>
      </div>
    `;

    grid.appendChild(card);
  });

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out, Zetu! I'll get back to you soon.");
  });