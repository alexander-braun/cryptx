const express = require('express')
const router = express.Router()

// @route       GET api/presets
// @description Test route
// @access      Public

router.get('/', (req, res) => res.send('Presets Route'))

module.exports = router