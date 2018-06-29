import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/theme', (req, res) => {
  connection.query('SELECT * FROM attractions', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/theme/coffee', (req, res) => {
  connection.query(`SELECT * FROM attractions WHERE THEME='coffee'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/theme/eat', (req, res) => {
  connection.query(`SELECT * FROM attractions WHERE THEME='eat'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/theme/art', (req, res) => {
  connection.query(`SELECT * FROM attractions WHERE THEME='art'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/theme/love', (req, res) => {
  connection.query(`SELECT * FROM attractions WHERE THEME='love'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

export default router;