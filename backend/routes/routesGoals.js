const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({  data: 'Get goals'})
});

router.post('/', (req, res) =>{
    res.status(200).json({  data: 'post goals '})
});

router.put('/:id', (req, res) =>{
    res.status(200).json({data : `update goals ${req.params.id}`})
});

router.delete('/:id', (req, res) =>{
    res.status(200).json({data : `delete  goals ${req.params.id}`})
});

module.exports = router;