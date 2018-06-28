import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/guides', (req, res) => {
  connection.query('SELECT * FROM Guides', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/Guides/vincent', (req, res) => {
  connection.query(`SELECT * FROM Guides WHERE PERSONNAGE='Van Gogh'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/Guides/mata', (req, res) => {
  connection.query(`SELECT * FROM Guides WHERE PERSONNAGE='Mata'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/Guides/dave', (req, res) => {
  connection.query(`SELECT * FROM Guides WHERE PERSONNAGE='Dave'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/Guides/houten', (req, res) => {
  connection.query(`SELECT * FROM Guides WHERE PERSONNAGE='Van Houten'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

export default router;