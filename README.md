# Lab 10 - CI + Deployment

# Завдання

10.1 `env_config.js`, `GET /`
10.2 `.github/workflows/autograde.yml`
10.3 `production_hardening.js`, `GET /health`, `GET /boom`

# Як запускати

```bash
node <файл> 3000
```

# Перевірка кожного завдання

*10.1 - env config*
```bash
PORT=3000 node env_config.js
curl -i http://127.0.0.1:3000/
# очікується: 200
```

*10.2 - GitHub Actions*
```bash
eu-node-basics verify 33 .github/workflows/autograde.yml
```
Файл має лежати за шляхом `.github/workflows/autograde.yml` у репозиторії

*10.3 - production hardening*
```bash
node production_hardening.js 3000

curl -i http://127.0.0.1:3000/health
# очікується: 200, {"ok":true}, security headers

curl -i http://127.0.0.1:3000/boom
# очікується: 500, "Internal Server Error", сервер продовжує працювати

curl -i -X OPTIONS http://127.0.0.1:3000/health
# очікується: 204
```
