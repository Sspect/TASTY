// Check if the Web Speech API is available
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    
    recognition.continuous = true; // Continuously listen for speech
    recognition.interimResults = true; // Get interim results

    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', () => {
        recognition.start();
        recognition.stop();
    });

    
    

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        output.textContent = transcript;


        if (transcript.includes("Previous step")) {
            console.log("Previous step")
        } else if (transcript.includes("Next step")) {
            console.log("Next step");
        } else {
            // Handle unrecognized commands or provide feedback to the user
            console.log("unrecognized")
        }
    };
    

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
        console.log('Speech recognition ended.');
    };
} else {
    alert('Speech recognition not supported in your browser.');
}
