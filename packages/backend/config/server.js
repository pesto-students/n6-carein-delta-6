module.exports = ({ env }) => ({
  host: env('127.0.0.1'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '257ddc27fb260e3d4b7032c681b4853b'),
    },
  },
}); 
