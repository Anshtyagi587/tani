async function fetchAIResponse(userMessage) {
    const response = await fetch("https://huggingface.co/spaces/Ansh1234567890/tanipanda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
    });

    const data = await response.json();
    return data.response || "I'm not sure, but stay safe!";
}
