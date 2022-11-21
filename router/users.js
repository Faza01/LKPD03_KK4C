const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

// menampilkan data
router.get('/users', usercontroller.index)

// menampilkan data dengan id tertentu
router.get('/user/:id', usercontroller.show)

// menyimpan data
router.post('/user', usercontroller.store)

// menyimpan perubahan data dengan id tertentu
router.put('/user/:id', usercontroller.update)

// menghapus data dengan id tertentu
router.delete('/user/:id', usercontroller.delete)

module.exports = router

// XIIRPL3_19_Faza