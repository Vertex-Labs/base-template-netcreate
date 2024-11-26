const { Router } = require('express')
const router = Router()

// Environment parameters that reference the Turbo 360 Web Socket Gateway path
// Note: no protocol prefix
const gateway = process.env.WSG_GATEWAY
  ? process.env.WSG_GATEWAY
  : 'q716d6lwhe.execute-api.us-east-1.amazonaws.com/production/';
const projectSlug = process.env.TURBO_PROJECT_SLUG;

const ncConfig = {
  // Client
  ip: '127.0.0.1',
  ukey: '????',
  // Server
  hostname: 'localhost',
  hostip: '127.0.0.1',
  ustart: undefined,
  // Socket
  uaddr: `${gateway}?turbo=${projectSlug}`,
  uport: undefined,
  wss: true,
  preamble: '{"action":"join-network"}',
  heartbeat: false
};

router.get('/', (req, res, next) => {
  const template = 'home'
  res.render(template, ncConfig)
})

router.get('/ursys', (req, res, next) => {
  res.json({
    type: "netcreate",
    version: "0.0.0.0"
  });
  res.sendStatus(200);
})

module.exports = router
