const express = require('express');
const router = express.Router();

const patients = require('../data/patient');

// GET all patients
router.get('/', (req, res) => {
  res.json(patients);
});

// GET single patient by ID
router.get('/:id', (req, res) => {
  const patient = patients.find(p => p.id === parseInt(req.params.id));
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  res.json(patient);
});

module.exports = router;
