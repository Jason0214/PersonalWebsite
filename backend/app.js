import http from 'http';
import debug from 'debug';

import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// webpack dev config
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.dev.babel.js';

import rsc from './resource';

let app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use('/resource', rsc);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath
  }));
} else {
  let staticDirPath = path.join(__dirname, '..', 'frontend', 'dist', 'prod');
  app.use(express.static(staticDirPath));
}

app.use(function (req, res) {
  let err = new Error('Not Found');
  err.status = 404;
  res.send(err);
  res.end();
});

// bind express app to http server
let port = 3000;
let server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug(':server')('Listening on ' + bind);
});
