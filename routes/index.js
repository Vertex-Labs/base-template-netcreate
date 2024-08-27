const { Router } = require('express')
const router = Router()

/*
    }
    window.NC_UNISYS = {
      client: {
        ip: '127.0.0.1',
        ukey: 'UHT_00000'
      },
      server: {
        hostname: 'localhost',
        ip: '192.168.11.133',
        ustart: '2024-08-26T11:54:44.337Z'
      },
      socket: {
        uaddr: '192.168.11.133',
        uport: '2929'
      }
    };
*/

const gateway = process.env.WSG_GATEWAY 
  ? process.env.WSG_GATEWAY 
  : 'tubfgw8dhf.execute-api.us-east-1.amazonaws.com/production/';

const ncConfig = {
  // Client
  ip: '127.0.0.1',
  ukey: '????',
  // Server
  hostname: 'localhost',
  hostip: '127.0.0.1',
  ustart: undefined,
  // Socket
  uaddr: gateway,
  uport: undefined,
  wss: true,
  preamble: '{"action":"join-network"}',
  heartbeat: false
};

router.get('/', (req, res, next) => {
  const template = 'home'
  res.render(template, ncConfig)
})

module.exports = router
