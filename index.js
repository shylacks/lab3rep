const express = require('express')
const app = express()
const port = 5050

app.get('/endpoint', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export default app;