import { Router } from "express"

import { CategoriesRepository } from "../repositories/CategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  categoriesRepository.create({name, description})

  return res.status(201).send()
})

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.list()
  return res.status(200).json(categories)
})

export { categoriesRoutes }
