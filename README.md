  <h2>Usage of the Project:</h2>
    <ol>
        <li>Clone the repository.</li>
        <li>Place your JSON items in the <code>db.json</code> file.</li>
        <li>Run the command <code>npm start</code>.</li>
        <li>If you encounter an EADDRINUSE error, go to the <code>server.js</code> file, change the project's port, and run the <code>npm start</code> command again.</li>
    </ol>

  <h2>How to Set Up This Project:</h2>
<ol>
        <li>Create a new folder and run the following commands in sequence to set up the initial files:</li>
        <pre><code>
npm i json-server@0.17.4    // Or any version you want to use
npm init
        </code></pre>
        <li>Create a JavaScript file (it's recommended to name it <code>json-server.js</code>) and add the following code:</li>
        <pre><code>
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // The name of the database file to save the data (optional)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3030, () => {
    console.log(`JSON Server is running on port 3030`); // Set the desired port to run
});
        </code></pre>
        <li>Place your data in the <code>db.json</code> file.</li>
        <li>Add the following configuration to the <code>package.json</code> file in the <code>scripts</code> section:</li>
        <pre><code>
"start": "node server.js"
        </code></pre>
        <li>Finally, run the command <code>npm start</code>.</li>
    </ol>
