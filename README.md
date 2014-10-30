# my first angular app: features drag and drop as well as some unit and e2e tests (not full coverage)
Greatly derived from [angular-seed](https://github.com/angular/angular-seed).
The documenation below is the abridged version


### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.


### Running Unit Tests

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/*.js`

```
npm test
```

### End to end testing

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/*.js`

```
npm start
```

```
npm run update-webdriver
```

```
npm run protractor
```

### Running the App during Development

```
sudo npm install -g http-server
```

```
http-server -a localhost -p 8000
```