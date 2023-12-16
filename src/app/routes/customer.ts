import { Router } from "express";
const router = Router()

router.post('/customer', (req, res) => {
  res.send('Create new customer')
})

router.get('/customers', (req, res) => {
  res.send('Get all customers')
})

router.get('/customer/:id', (req, res) => {
  res.send('Getting customer by id')
})

router.put('/customer/:id', (req, res) => {
  res.send('Updating a customer by id')
})


router.delete('/customer/:id', (req, res) => {
  res.send('Delete a customer')
})

export = router