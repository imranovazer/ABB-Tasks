import 'dotenv/config'
import http from 'http'
import data from './data.js'
import url from 'url'




const PORT = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    try {
        const { page, size } = url.parse(req.url, true).query
        const pageI = Number(page) || 1;
        const sizeI = Number(size) || 5
        const startIndex = (pageI - 1) * sizeI;
        const endIndex = startIndex + sizeI;
        const dataToSend = data.slice(startIndex, endIndex)
        res.writeHead(200, { "Content-Type": "application/json" })

        res.end(JSON.stringify(dataToSend));

    } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({
            status: 'fail',
            error
        }));
    }


})


server.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})