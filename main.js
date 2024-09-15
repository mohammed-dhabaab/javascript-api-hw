const resCodes = [
    100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
    301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
    408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
    424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
    503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
];

const resCodeNames = [
    "Continue", "Switching Protocols", "Processing", "Early Hints",
    "OK", "Created", "Accepted", "Non-Authoritative Information",
    "No Content", "Partial Content", "Multi-Status", "Already Reported",
    "Content Directory Modified", "IM Used", "Multiple Choices",
    "Moved Permanently", "Found", "See Other", "Not Modified",
    "Use Proxy", "Temporary Redirect", "Permanent Redirect", "Bad Request",
    "Unauthorized", "Payment Required", "Forbidden", "Not Found",
    "Method Not Allowed", "Not Acceptable", "Proxy Authentication Required",
    "Request Timeout", "Conflict", "Gone", "Length Required",
    "Precondition Failed", "Payload Too Large", "URI Too Long",
    "Unsupported Media Type", "Range Not Satisfiable", "Expectation Failed",
    "I'm a teapot", "Enhance Your Calm", "Misdirected Request",
    "Unprocessable Entity", "Locked", "Failed Dependency",
    "Too Early", "Upgrade Required", "Precondition Required",
    "Too Many Requests", "Request Header Fields Too Large",
    "Connection Closed Without Response", "Blocked by Windows Parental Controls",
    "Unavailable For Legal Reasons", "HTTP Request Sent to HTTPS Port",
    "Invalid Token", "Token Required", "Internal Server Error",
    "Not Implemented", "Bad Gateway", "Service Unavailable",
    "Gateway Timeout", "Variant Also Negotiates", "Insufficient Storage",
    "Loop Detected", "Bandwidth Limit Exceeded", "Not Extended",
    "Network Authentication Required", "Web Server Is Down",
    "Connection Timed Out", "Origin Is Unreachable",
    "SSL Handshake Failed", "Origin DNS Error", "Network Connect Timeout Error"
];


const mainContainer = document.querySelector(".main-container")

// async function fetchStatus() {
//     try {
//         if (!res.ok) {
//             throw new Error(`Network response was not ok. status: ${res.status}`)
//         }
//         resCodes.map((code, index) => {
//             const imageSrc = await fetch(`https://http.cat/${code}`)
//             const cardContainer = createElement("div", "cardContainer")
//             const cardImageContainer = createElement("div", "character-container-image")
//             const cardImage = createElement("img", "card-image", null, )
//             const cardCode = createElement("h2", "card-code", code)
//             const cardTitle = createElement("p", "card-title", resCodeNames[index])

//             cardImageContainer.appendChild(cardImage)
//             cardContainer.appendChild(cardImageContainer)
//             cardContainer.appendChild(cardCode)
//             cardContainer.appendChild(cardTitle)

//             mainContainer.appendChild(cardImageContainer)
//         })

//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

async function fetchStatus() {
    try {
        for (const [index, code] of resCodes.entries()) {
            const response = await fetch(`https://http.cat/${code}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch image for code ${code}: ${response.status}`);
            }
            // Creating
            const cardContainer = document.createElement("div")
            cardContainer.classList.add("card-container")

            const cardImageContainer = document.createElement("div")
            cardImageContainer.classList.add("card-container-image")

            const cardImage = document.createElement("img")
            cardImage.classList.add("card-image");
            cardImage.src = `${response.url}.jpg`

            const cardCode = document.createElement("h2")
            cardCode.classList.add("card-code");
            cardCode.innerText = code;

            const cardTitle = document.createElement("p")
            cardTitle.classList.add("card-title");
            cardTitle.innerText = resCodeNames[index]

            const cardTextContainer = document.createElement("div")
            cardTextContainer.classList.add("card-text-container")

            // Appending
            cardTextContainer.appendChild(cardCode)
            cardTextContainer.appendChild(cardTitle)

            cardImageContainer.appendChild(cardImage);
            cardContainer.appendChild(cardImageContainer);
            cardContainer.appendChild(cardTextContainer);


            mainContainer.appendChild(cardContainer);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

fetchStatus()