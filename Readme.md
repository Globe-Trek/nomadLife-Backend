## Requirements

- Have free the port 3000.
- Have free the port 5432.
- Have install docker-compose, docker.

## Start Drone Service

In a termnial tab run:

```
docker-compose up
```

In another one run:

```
npm run start
```

In the last one run:

```
npm run load-seeders
```

Please follow the sequence of the commands to load the dummy data without problems.

---

In the folder postmanFiles you will find the API collections of this API.


## Audit Working

The audit logs are saving in the database and are gathering every 1 minute.

## Notes

- You can fin the database credentials in the .env.
- The database used is PostgresSQl.
