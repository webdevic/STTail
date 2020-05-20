# STTail

StockTwits querier

## Run integrated version

```bash
yarn install
yarn test
yarn build
yarn start
```

## [UI Client (create-react-app)](./client/)

```bash
cd client
echo "REACT_APP_API_SERVER='http://localhost:3000'" > .env
yarn install
yarn test
yarn start
```

### [Browser Debugging](https://github.com/visionmedia/debug#browser-support)

## [REST API Server (Express.js backend to handle CORS)](./server/)

```bash
cd server
echo "CORS_ALLOWED_HOSTS='http://localhost:3001'" > .env
yarn install
yarn test
yarn start
```

## [Project Management](./tasking/)

### TODO

- [ ] :beetle: Improve tweet message body parsing :beetle:

- [ ] Optimize API calls, reduce waste by using cursors

- [ ] Add UI control to set refresh interval (currently default to 120000 ms)

- [ ] Integrate with Auth providers

- [ ] ~
