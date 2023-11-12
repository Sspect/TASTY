if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    const recognition = new (webkitSpeechRecognition || SpeechRecognition)();

    recognition.continuous = true; // Continuously listen for speech
    recognition.interimResults = true;

    let currentStep = 1;

    

    recognition.start();
    

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;

      
      if (transcript.includes("step one")) {
        currentStep = 1;
        button(currentStep);
      } else if (transcript.includes("step 2")) {
        currentStep = 2;
        button(currentStep);
      } else if (transcript.includes("step 3")) {
        currentStep = 3;
        button(currentStep);
      } else if (transcript.includes("step 4")) {
        currentStep = 4;
        button(currentStep);
      } else if (transcript.includes("step 5")) {
        currentStep = 5;
        button(currentStep);
      } else {
        console.log("unrecognized");
        console.log("currentStep: " + currentStep);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    
  } else {
    alert("Speech recognition not supported in your browser.");
  }

  button(1);

  function button(num) {
    let id = "radio" + num 
    console.log(num);
    console.log(id);


    document.getElementById(id).checked = true;
    let radioButtons = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].id == id) {
    
        for (let j = 0; j < radioButtons.length; j++) {
          let divID = "step" + (j + 1);
          document.getElementById(divID).style.display = "none";
        }
        let divID = "step" + (i + 1);
        document.getElementById(divID).style.display = "block";
      }
    }
  }