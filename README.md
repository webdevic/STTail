# STTail

StockTwits querier

## [UI Client (create-react-app)](./client/)

```bash
cd client
yarn install
yarn start
```

### [Browser Debugging](https://github.com/visionmedia/debug#browser-support)

## [REST API Server (Express.js backend to handle CORS)](./server/)

```bash
cd server
echo "CORS_ALLOWED_HOSTS='http://localhost:3001'" > .env
yarn install
yarn start
```

## [Project Management](./tasking/)

### TODO

- [ ] Optimize API calls, reduce waste by using cursors

- [ ] Add UI control to set refresh interval (currently default to 120000 ms)

- [ ] Integrate with Auth providers

- [ ] ~
