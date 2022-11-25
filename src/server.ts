import express from "express"

import { categoriesRoutes } from "./routes"

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)

app.get("/", (_, res) => {
  return res.json({ message: "API is working" })
})

app.listen(3333, () => console.log("Server is running!"))
