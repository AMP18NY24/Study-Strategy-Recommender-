const strategies = {
    visual: "Use mind maps, flowcharts, and diagrams. Color-code your notes.",
    auditory: "Record lectures, listen to podcasts, or discuss topics aloud.",
    kinesthetic: "Engage in hands-on experiments and role-playing activities.",
    reading: "Read textbooks, take detailed notes, and write summaries."
  };
  
  function recommendStrategy() {
    const style = document.getElementById("studyStyle").value;
    const output = document.getElementById("output");
    if (style) {
      output.innerHTML = `<h2>Recommended Strategy:</h2><p>${strategies[style]}</p>`;
    } else {
      output.innerHTML = "<p>Please select a study style first.</p>";
    }
  }
  
  function showQuiz() {
    document.getElementById("quiz").style.display = "block";
  }
  
  function submitQuiz() {
    const answers = document.getElementsByName("quizAnswer");
    let selected = "";
    for (let answer of answers) {
      if (answer.checked) {
        selected = answer.value;
        break;
      }
    }
    const output = document.getElementById("output");
    if (selected) {
      output.innerHTML = `<h2>Your Learning Style: ${selected.charAt(0).toUpperCase() + selected.slice(1)}</h2>
                          <p>${strategies[selected]}</p>`;
    } else {
      output.innerHTML = "<p>Please select an answer in the quiz.</p>";
    }
  }
  