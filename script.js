const particlesContainer = document.getElementById("particles-container");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.top = `${Math.random() * window.innerHeight}px`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  particle.style.transform = `translate(0, 0)`;
  particle.velocityX = Math.random() * 2 - 1;
  particle.velocityY = Math.random() * 2 - 1;
  particlesContainer.appendChild(particle);
}

function animateParticles() {
  const particles = document.querySelectorAll(".particle");
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    particle.style.top = `${
      parseFloat(particle.style.top) + particle.velocityY
    }px`;
    particle.style.left = `${
      parseFloat(particle.style.left) + particle.velocityX
    }px`;

    if (
      parseFloat(particle.style.top) < 0 ||
      parseFloat(particle.style.top) > particlesContainer.offsetHeight
    ) {
      particle.velocityY = -particle.velocityY;
    }
    if (
      parseFloat(particle.style.left) < 0 ||
      parseFloat(particle.style.left) > particlesContainer.offsetWidth
    ) {
      particle.velocityX = -particle.velocityX;
    }
  }
  requestAnimationFrame(animateParticles);
}

for (let i = 0; i < 100; i++) {
  createParticle();
}

animateParticles();
