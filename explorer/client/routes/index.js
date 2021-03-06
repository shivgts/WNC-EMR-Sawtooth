const router = require('express').Router();

const config = require('./../config');

const patient = require('./../services/patient');
const document = require('./../services/document');
const hospital = require('./../services/hospital');
const user = require('./../services/user');
const appointment = require('./../services/appointment');

router.get('/patient', patient.getPatient);
router.post('/patient', patient.createPatient);
router.put('/patient/:id', patient.updatePatient);
router.delete('/patient/:id', patient.deletePatient);

router.post('/document', document.addDocument);
router.delete('/document/:id', document.deleteDocument);
router.get('/document', document.getDocument);

router.post('/hospital', hospital.addHospital);
router.get('/hospital', hospital.getHospital);
router.put('/hospital/:id', hospital.updateHospital);
router.delete('/hospital/:id', hospital.deleteHospital);

router.get('/user', user.getUser);
router.post('/user/login/:id', user.login);
router.post('/user/register/:type', user.register);
router.put('/user/:id', user.update);

router.post('/appointment', appointment.createAppointment);

router.get('/config', (req, res) => {
  res.json(config).end();
});


module.exports = router;
