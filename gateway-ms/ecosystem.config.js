module.exports = {
  apps: [
    {
      // app configs
      name: 'core_service_server',
      script: 'app/server.js',
      instances: 2,
      env: {
        COMMON_VARIABLE: 'true',
      },
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 15000,
      error_file: '/var/log/pac/api.err.log',
      out_file: '/var/log/pac/api.out.log',
      // logrotator configs
      max_size: '10M',
      // retain: 'all',
      compress: true,
      dateFormat: 'YYYY-MM-DD_HH-mm-ss',
      workerInterval: 10,
      rotateInterval: '0 1 * * *',
      rotateModule: true,
      dependencies: ['pm2-logrotate'],
    },
  ],
};
