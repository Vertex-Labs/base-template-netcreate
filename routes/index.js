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

const ncConfig = {
  // Client
  ip: '127.0.0.1',
  ukey: '????',
  // Server
  hostname: 'localhost',
  hostip: '127.0.0.1',
  ustart: undefined,
  // Socket
  uaddr: process.env.WSG_GATEWAY,
  uport: undefined,
  wss: true,
  preamble: '{"action":"join-network"}'
};

router.get('/', (req, res, next) => {
  const template = 'home'
  res.render(template, ncConfig)
})

module.exports = router
