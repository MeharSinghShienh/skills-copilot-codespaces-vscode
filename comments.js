// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
const comments = [
  { username: 'ali', comment: 'first comment' },
  { username: 'veli', comment: 'second comment' },
];