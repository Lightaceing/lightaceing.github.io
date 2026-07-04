class TabBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- top bar -->
    <div class="top-bar">
      <span class="name"> Tanveer Ahmed Khan - System Engineer | Machine Learning Engineer</span>
      <div class="nav-buttons">
        <button>
          <a href="mailto:tanveer.akhan.work@gmail.com" style="text-decoration: none">Email Me</a>
        </button>

        <button>
          <a href="/index.html" style="text-decoration: none">Home</a>
        </button>

        <button>
          <a href="/project-list.html" style="text-decoration: none"
            >Projects</a
          >
        </button>

        <button>
          <a
            href="/Assets/Docs/Tanveer_Ahmed_Khan_6_2026.pdf"
            style="text-decoration: none"
            >Resume</a
          >
        </button>

        <button>
          <a href="https://www.linkedin.com/in/tanveer-a-khan/">
            <img
              src="/Assets/linkedin_icon.svg"
              alt="LinkedIn"
              class="resume_icon"
            />
          </a>
        </button>

        <button>
          <a href="https://github.com/tanveer-akhan">
            <img
              src="/Assets/github_icon.svg"
              alt="Github"
              class="resume_icon"
            />
          </a>
        </button>

        <button>
          <a href="https://www.kaggle.com/lightaceing">
            <img
              src="/Assets/kaggle_icon.svg"
              alt="Kaggle"
              class="resume_icon"
            />
          </a>
        </button>
      </div>
    </div>
    `;
  }
}

customElements.define("top-bar", TabBar);
