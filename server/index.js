import server from "./app.js";

server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})