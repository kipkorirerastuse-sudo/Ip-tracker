document.getElementById('track-btn').addEventListener('click', async () => {
    const ip = document.getElementById('ip-input').value;
    const response = await fetch(`/track/${ip}`);
    const data = await response.json();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>IP: ${data.query}</p>
        <p>Country: ${data.country}</p>
        <p>City: ${data.city}</p>
        <p>ISP: ${data.isp}</p>
    `;
});
