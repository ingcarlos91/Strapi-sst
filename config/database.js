module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-66.railway.app"),
      port: env.int("PGPORT", 7322),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "o58La9sSPA5MBGymTJHh"),
      ssl: env.bool(false),
    },
  },
});
