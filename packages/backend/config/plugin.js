module.exports = ({ env }) => ({
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_ACCESS_KEY_ID'),
      secret: env('AWS_ACCESS_SECRET'),
      amazon: 'https://email.us-east-2.amazonaws.com',
    },
    settings: {
      defaultFrom: 'vinitbarole@gmail.com',
      defaultReplyTo: 'carein.pvt@gmail.com',
    },
  },

  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
});
// SMTP Username:
// AKIAYT43VJ6HC5AWT254
// SMTP Password:
// BF0M9elE8N+48kq23aqbjk41RfAbR03pF1TTjNWEhpL/