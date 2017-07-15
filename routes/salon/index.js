const router = require('express').Router()

const newone = require('./new')
const all = require('./all')
const one = require('./one')
const own = require('./own')
const modle = require('./modle')
const del = require('./del')

router.use('/new', newone)
router.use('/all', all)
router.use('/one', one)
router.use('/own', own)
router.use('/modle', modle)
router.use('/del', del)

module.exports = router