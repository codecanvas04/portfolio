/* =========================================================
   PARI VORA PORTFOLIO
   Projects, tabs, mobile menu, active nav,
   section counter, scroll reveal, copy email
   ========================================================= */


/* ---------- 1. Tell CSS that JavaScript is enabled ---------- */

document.documentElement.classList.add("js");


/* ---------- 2. Project data ---------- */

const PROJECTS = {

  /* ========================================================
     MUSIC LAB
     ======================================================== */

  "music-lab": {

    title: "Music Lab",

    punch:
      "114K+ tracks, one place to find your next song.",

    description:
      "Music Lab started with a huge Spotify dataset and the question: what can you actually learn when you stop looking at songs as just song titles? I worked with more than 114K tracks, cleaned and explored the data, looked for patterns across musical features, and then turned that analysis into an interactive website. Building this project taught me how messy raw data becomes meaningful only after you know how to clean it, question it and present it properly. It also gave me a much better understanding of how Python-based analysis can connect to a real web interface instead of living inside a notebook.",

    highlights: [

      "Worked with and explored a dataset containing 114K+ tracks",

      "Learned how to clean, organise and investigate real-world data",

      "Used exploratory data analysis to find patterns in musical features",

      "Connected Python data processing with a Flask backend",

      "Turned the analysis into an interactive front end instead of leaving it as raw results"

    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Flask",
      "JavaScript"
    ],

    repo:
      "https://github.com/codecanvas04/python-eda-project",

    demo:
      "https://codecanvas04.github.io/python-eda-project/frontend/index.html"
  },


  /* ========================================================
     YOUTUBE CLONE
     ======================================================== */

  "youtube-clone": {

    title: "YouTube homepage clone",

    punch:
      "A front-end recreation built from the ground up.",

    description:
      "This was one of my first proper steps into web development: taking a website I already knew extremely well and trying to recreate what was happening behind the screen. Instead of relying on JavaScript or a framework, I had to figure out the structure and appearance using just HTML and CSS. The project taught me how important layout really is — spacing, sizing, alignment, positioning and repetition can completely change how a page feels. It also taught me to look at a familiar interface differently: not as a user, but as someone trying to rebuild it.",

    highlights: [

      "Recreated the main structure of the YouTube homepage from scratch",

      "Practised translating a visual reference into HTML structure",

      "Learned how CSS positioning, spacing and sizing work together",

      "Worked with repeated video cards, thumbnails, icons and navigation elements",

      "Learned to pay attention to small visual details when matching an existing interface"

    ],

    tech: [
      "HTML",
      "CSS"
    ],

    repo:
      "https://github.com/codecanvas04/youtube-clone",

    demo:
      "https://codecanvas04.github.io/youtube-clone/youtube.html"
  },


  /* ========================================================
     ROCK PAPER SCISSORS
     ======================================================== */

  "rock-paper-scissors": {

    title: "Rock, paper, scissors",

    punch:
      "A small game that taught me how code becomes interactive.",

    description:
      "Rock, paper, scissors was where JavaScript started feeling less like syntax and more like something I could actually use to make a webpage respond. I had to turn a simple game into logic: generate the computer's choice, compare it with the player's choice, decide who wins and update what the user sees. Building it helped me understand conditionals, random values, event handling and DOM manipulation in a much more practical way. It was a small project, but it made the connection between JavaScript logic and an interactive webpage much clearer.",

    highlights: [

      "Created the game logic for player versus computer",

      "Used random values to generate the computer's move",

      "Practised conditionals by handling different winning and losing combinations",

      "Connected button clicks to JavaScript logic and visible results",

      "Learned how JavaScript can control and update elements on a webpage"

    ],

    tech: [
      "JavaScript",
      "HTML",
      "CSS"
    ],

    repo:
      "https://github.com/codecanvas04/Rock-Paper-Scissors",

    demo:
      "https://codecanvas04.github.io/Rock-Paper-Scissors/rock-paper-scissors-final.html"
  },


  /* ========================================================
     TO-DO LIST
     ======================================================== */

  "todo-list": {

    title: "To-do list",

    punch:
      "Turning a simple list into a hands-on DOM exercise.",

    description:
      "The to-do list looks simple on the surface, but it was one of the projects that made me properly understand what the DOM is for. Instead of writing everything directly into the HTML, I had to take what the user entered, create elements dynamically and make the page change when something happened. It gave me practice with event listeners, user input and keeping the interface in sync with what the user was doing. More importantly, it showed me how even a tiny application is really a collection of small interactions working together.",

    highlights: [

      "Accepted tasks through user input",

      "Practised creating and updating webpage elements dynamically",

      "Used event listeners to respond to user actions",

      "Learned the basics of DOM manipulation through a real mini application",

      "Got more comfortable thinking about how user actions should change the UI"

    ],

    tech: [
      "JavaScript",
      "HTML",
      "CSS"
    ],

    repo:
      "https://github.com/codecanvas04/to-do-list",

    demo:
      "https://codecanvas04.github.io/to-do-list/todo-list.html"
  },


  /* ========================================================
     CALCULATOR
     ======================================================== */

  "calculator": {

    title: "Calculator",

    punch:
      "Where button clicks finally started doing some maths.",

    description:
      "The calculator was one of my early exercises in turning a collection of buttons into something that actually behaves like an application. Every click has to mean something: numbers need to appear in the display, operators need to be remembered and the final input needs to produce a result. Building it helped me understand event handling and the flow of information through a small interactive program. It also made me start thinking about edge cases — because a calculator that works for one perfect input isn't very useful if it breaks the moment someone presses the wrong button.",

    highlights: [

      "Built an interactive calculator interface from scratch",

      "Practised handling clicks from number and operator buttons",

      "Learned how to update the displayed value based on user input",

      "Worked through the basic flow of arithmetic operations",

      "Started thinking about user behaviour and edge cases instead of only the happy path"

    ],

    tech: [
      "JavaScript",
      "HTML",
      "CSS"
    ],

    repo:
      "https://github.com/codecanvas04/calculator",

    demo:
      "https://codecanvas04.github.io/calculator/calci.html"
  }

};


/* ---------- 3. DOM ready ---------- */

document.addEventListener("DOMContentLoaded", () => {

  initMenu();

  initActiveNav();

  initTabs();

  initProjects();

  initCopyEmail();

  initReveal();

});


/* =========================================================
   4. MOBILE MENU
   ========================================================= */

function initMenu() {

  const header =
    document.querySelector(".site-header");

  const button =
    document.querySelector(".menu-btn");

  const nav =
    document.getElementById("site-nav");


  if (!header || !button || !nav) {
    return;
  }


  function setMenu(open) {

    header.classList.toggle(
      "menu-open",
      open
    );

    button.setAttribute(
      "aria-expanded",
      String(open)
    );

    button.setAttribute(
      "aria-label",
      open
        ? "Close menu"
        : "Open menu"
    );

    document.body.classList.toggle(
      "no-scroll",
      open
    );
  }


  button.addEventListener(
    "click",
    () => {

      setMenu(
        !header.classList.contains(
          "menu-open"
        )
      );

    }
  );


  nav.addEventListener(
    "click",
    (event) => {

      if (
        event.target.closest("a")
      ) {

        setMenu(false);

      }

    }
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        setMenu(false);

      }

    }
  );


  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 860) {

        setMenu(false);

      }

    }
  );

}


/* =========================================================
   5. ACTIVE NAV + SECTION COUNTER
   ========================================================= */

function initActiveNav() {

  const links =
    Array.from(
      document.querySelectorAll(
        ".nav-links a"
      )
    );


  const sections =
    document.querySelectorAll(
      "main > section[id]"
    );


  const current =
    document.getElementById(
      "page-current"
    );


  const total =
    document.getElementById(
      "page-total"
    );


  if (
    !links.length ||
    !sections.length
  ) {

    return;

  }


  const pad =
    (number) =>
      String(number).padStart(
        2,
        "0"
      );


  if (total) {

    total.textContent =
      "/" + pad(links.length);

  }


  const linksById =
    new Map(
      links.map(
        (link) => [

          link
            .getAttribute("href")
            .slice(1),

          link

        ]
      )
    );


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            const link =
              linksById.get(
                entry.target.id
              );


            if (!link) {

              return;

            }


            links.forEach(
              (item) => {

                item.removeAttribute(
                  "aria-current"
                );

              }
            );


            link.setAttribute(
              "aria-current",
              "true"
            );


            if (current) {

              current.textContent =
                pad(
                  links.indexOf(link) + 1
                );

            }

          }
        );

      },

      {
        rootMargin:
          "-40% 0px -50% 0px"
      }

    );


  sections.forEach(
    (section) => {

      observer.observe(
        section
      );

    }
  );

}


/* =========================================================
   6. PROJECT / WORK TABS
   ========================================================= */

function initTabs() {

  const tabs =
    Array.from(
      document.querySelectorAll(
        '[role="tab"]'
      )
    );


  if (!tabs.length) {

    return;

  }


  function selectTab(
    selectedTab,
    shouldFocus = false
  ) {

    tabs.forEach(
      (tab) => {

        const selected =
          tab === selectedTab;


        tab.setAttribute(
          "aria-selected",
          String(selected)
        );


        tab.tabIndex =
          selected
            ? 0
            : -1;


        const panel =
          document.getElementById(
            tab.getAttribute(
              "aria-controls"
            )
          );


        if (panel) {

          panel.hidden =
            !selected;

        }

      }
    );


    if (shouldFocus) {

      selectedTab.focus();

    }

  }


  tabs.forEach(
    (tab, index) => {

      tab.addEventListener(
        "click",
        () => {

          selectTab(tab);

        }
      );


      tab.addEventListener(
        "keydown",
        (event) => {

          let nextTab = null;


          if (
            event.key === "ArrowRight"
          ) {

            nextTab =
              tabs[
                (index + 1) %
                tabs.length
              ];

          }

          else if (
            event.key === "ArrowLeft"
          ) {

            nextTab =
              tabs[
                (
                  index -
                  1 +
                  tabs.length
                ) %
                tabs.length
              ];

          }

          else if (
            event.key === "Home"
          ) {

            nextTab =
              tabs[0];

          }

          else if (
            event.key === "End"
          ) {

            nextTab =
              tabs[
                tabs.length - 1
              ];

          }


          if (nextTab) {

            event.preventDefault();

            selectTab(
              nextTab,
              true
            );

          }

        }
      );

    }
  );

}


/* =========================================================
   7. PROJECT DETAILS
   ========================================================= */

function initProjects() {

  const dialog =
    document.getElementById(
      "project-dialog"
    );


  const title =
    document.getElementById(
      "sheet-title"
    );


  const punch =
    document.getElementById(
      "sheet-punch"
    );


  const description =
    document.getElementById(
      "sheet-desc"
    );


  const highlightsTitle =
    document.getElementById(
      "sheet-highlights-title"
    );


  const highlights =
    document.getElementById(
      "sheet-highlights"
    );


  const tech =
    document.getElementById(
      "sheet-tech"
    );


  const repo =
    document.getElementById(
      "sheet-repo"
    );


  const demo =
    document.getElementById(
      "sheet-demo"
    );


  const back =
    document.getElementById(
      "sheet-back"
    );


  if (
    !dialog ||
    !title ||
    !punch ||
    !description ||
    !tech ||
    !repo ||
    !back
  ) {

    return;

  }


  function openProject(key) {

    const project =
      PROJECTS[key];


    if (!project) {

      return;

    }


    /* ---------- TITLE ---------- */

    title.textContent =
      project.title;


    /* ---------- PUNCHLINE ---------- */

    punch.textContent =
      project.punch;


    /* ---------- DESCRIPTION ---------- */

    description.textContent =
      project.description;


    /* ---------- HIGHLIGHTS ---------- */

    if (
      highlights &&
      highlightsTitle
    ) {

      highlights.replaceChildren();


      const items =
        project.highlights || [];


      items.forEach(
        (text) => {

          const li =
            document.createElement(
              "li"
            );


          li.textContent =
            text;


          highlights.appendChild(
            li
          );

        }
      );


      const hasHighlights =
        items.length > 0;


      highlights.hidden =
        !hasHighlights;


      highlightsTitle.hidden =
        !hasHighlights;

    }


    /* ---------- TECHNOLOGY ---------- */

    tech.replaceChildren();


    project.tech.forEach(
      (item) => {

        const li =
          document.createElement(
            "li"
          );


        li.className =
          "chip";


        li.textContent =
          item;


        tech.appendChild(
          li
        );

      }
    );


    /* ---------- GITHUB ---------- */

    repo.href =
      project.repo;


    repo.target =
      "_blank";


    repo.rel =
      "noopener noreferrer";


    /* ---------- LIVE DEMO ---------- */

    if (demo) {

      if (project.demo) {

        demo.href =
          project.demo;


        demo.target =
          "_blank";


        demo.rel =
          "noopener noreferrer";


        demo.hidden =
          false;

      }

      else {

        demo.hidden =
          true;

      }

    }


    /* ---------- OPEN DIALOG ---------- */

    if (
      typeof dialog.showModal !==
      "function"
    ) {

      window.open(
        project.repo,
        "_blank",
        "noopener"
      );

      return;

    }


    document.body.classList.add(
      "no-scroll"
    );


    dialog.showModal();


    dialog.scrollTop = 0;

  }


  /* ---------- PROJECT CLICK HANDLERS ---------- */

  document
    .querySelectorAll(
      ".project-open"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            openProject(
              button.dataset.project
            );

          }
        );

      }
    );


  /* ---------- BACK BUTTON ---------- */

  back.addEventListener(
    "click",
    () => {

      dialog.close();

    }
  );


  /* ---------- CLICK OUTSIDE ---------- */

  dialog.addEventListener(
    "click",
    (event) => {

      if (
        event.target === dialog
      ) {

        dialog.close();

      }

    }
  );


  /* ---------- CLOSE ---------- */

  dialog.addEventListener(
    "close",
    () => {

      document.body.classList.remove(
        "no-scroll"
      );

    }
  );

}


/* =========================================================
   8. COPY EMAIL
   ========================================================= */

function initCopyEmail() {

  const button =
    document.getElementById(
      "copy-email"
    );


  const status =
    document.getElementById(
      "copy-status"
    );


  if (!button || !status) {

    return;

  }


  const originalText =
    button.textContent;


  let timer = null;


  function fallbackCopy(text) {

    const textarea =
      document.createElement(
        "textarea"
      );


    textarea.value =
      text;


    textarea.setAttribute(
      "readonly",
      ""
    );


    textarea.style.position =
      "fixed";


    textarea.style.opacity =
      "0";


    document.body.appendChild(
      textarea
    );


    textarea.select();


    let success = false;


    try {

      success =
        document.execCommand(
          "copy"
        );

    }

    catch (error) {

      success = false;

    }


    document.body.removeChild(
      textarea
    );


    return success;

  }


  button.addEventListener(
    "click",
    async () => {

      const email =
        button.dataset.email;


      let success = false;


      try {

        await navigator.clipboard.writeText(
          email
        );

        success = true;

      }

      catch (error) {

        success =
          fallbackCopy(
            email
          );

      }


      button.textContent =
        success
          ? "Copied!"
          : "Copy failed";


      status.textContent =
        success
          ? "Email address copied."
          : "Could not copy email address.";


      clearTimeout(timer);


      timer =
        setTimeout(
          () => {

            button.textContent =
              originalText;


            status.textContent =
              "";

          },

          2200
        );

    }
  );

}


/* =========================================================
   9. SCROLL REVEAL
   ========================================================= */

function initReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (!elements.length) {

    return;

  }


  const reduceMotion =
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches;


  if (reduceMotion) {

    elements.forEach(
      (element) => {

        element.classList.add(
          "reveal-visible"
        );

      }
    );

    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            entry.target.classList.add(
              "reveal-visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },

      {
        threshold: 0.08,

        rootMargin:
          "0px 0px -60px 0px"
      }

    );


  elements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}