module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "email-smtp.us-east-2.amazonaws.com",
      port: 465,
      auth: {
        user: "AKIAYT43VJ6HEBNC2PPS",
        pass: "BCNd88xdDshvr0y7ahTiVHuC1MP36PFyIk7i6C/Q6IQ6",
      },
      secure: true,
    },
    settings: {
      defaultFrom: "vinitbarole@gmail.com",
      defaultReplyTo: "carein.pvt@gmail.com",
    },
  },
});
