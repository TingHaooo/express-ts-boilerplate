import express from 'express'
import cors from 'cors'

const app = express()

const main = () => {
  app.use(cors())

  app.get('*', (req, res) => {
    res.json({
      test: 'Hello World!'
    })
  })

  app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
  })
}

main()