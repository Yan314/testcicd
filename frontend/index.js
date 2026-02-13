console.log("test")


async function getMessage () {
    const response = await fetch("http://localhost:3001")
    const message = await response.text();

    document.getElementById("msg").textContent = message
}

async function getHelloMessage () {
    const response = await fetch("/api/hello");
    const data = await response.json();
    document.getElementById("msg2").textContent = data.message;
}

getMessage();
getHelloMessage();