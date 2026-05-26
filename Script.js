const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Recovery Portal</title>

            <meta name="viewport" content="width=device-width, initial-scale=1">

            <style>
                body{
                    margin:0;
                    padding:0;
                    background:#0f172a;
                    font-family:Arial;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    color:white;
                }

                .card{
                    background:#1e293b;
                    padding:30px;
                    border-radius:20px;
                    width:90%;
                    max-width:400px;
                    text-align:center;
                    box-shadow:0 0 20px rgba(0,0,0,0.4);
                }

                h1{
                    margin-bottom:10px;
                }

                input{
                    width:100%;
                    padding:14px;
                    margin-top:15px;
                    border:none;
                    border-radius:10px;
                    outline:none;
                }

                button{
                    width:100%;
                    padding:14px;
                    margin-top:15px;
                    border:none;
                    border-radius:10px;
                    background:#3b82f6;
                    color:white;
                    font-size:16px;
                    cursor:pointer;
                }

                button:hover{
                    background:#2563eb;
                }

                p{
                    color:#94a3b8;
                }
            </style>
        </head>

        <body>

            <div class="card">
                <h1>Device Recovery</h1>

                <p>Secure Recovery Dashboard</p>

                <input type="text" placeholder="Enter device code">

                <button>Continue</button>
            </div>

        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});