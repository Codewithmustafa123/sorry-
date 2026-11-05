const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY 🥺";
  gif.src = "images/sorry.png";
  noBtn.innerHTML = "Nahi";
  yesBtn.innerHTML = "Achha theek hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! Mujhe pata tha 💖";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Soch lo achhe se!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Achha theek hai";
    noBtn.innerHTML = "Nahi sochna";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe, mujhe pata tha 💖";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Ek baar aur soch lo...";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Chalo maan gayi";
      noBtn.innerHTML = "Final na";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe, mujhe pata tha 💖";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Maan jao na yaar! kitna nakhray dikhayegi 😤";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        // 🎉 FINAL SUCCESS — Mustafa ka naam
        noBtn.addEventListener("click", () => {
          question.innerHTML = "Yesss! Mujhe pata tha 💖<br><span class='from-line-final'>— Mustafa</span>";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })

        // 🏃 "No" button par hover — bhaagta hai (responsive-safe)
        function makeYesBtnRun() {
          const btnRect = yesBtn.getBoundingClientRect();
          const margin = 20;
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;

          // Ensure button stays inside screen
          const maxX = screenWidth - btnRect.width - margin;
          const maxY = screenHeight - btnRect.height - margin;

          // Random position
          const randomX = Math.max(margin, Math.random() * maxX);
          const randomY = Math.max(margin, Math.random() * maxY);

          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        }

        // Touch & Mouse dono ke liye
        yesBtn.addEventListener("mouseover", () => {
          if (!yesBtn.classList.contains("flying")) {
            yesBtn.classList.add("flying");
          }
          makeYesBtnRun();
        });

        yesBtn.addEventListener("touchstart", (e) => {
          e.preventDefault();
          if (!yesBtn.classList.contains("flying")) {
            yesBtn.classList.add("flying");
          }
          makeYesBtnRun();
        }, { passive: false });
      });
    });
  });
});