# `katistix/mersul-microbuzelor`

> Get information about the bus schedule in Romania.

<a href="https://www.buymeacoffee.com/katistix" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

This project is inspired by [IonicaBizau/mersul-trenurilor](https://github.com/IonicaBizau/mersul-trenurilor). And it uses [@IonicaBizau](https://github.com/IonicaBizau)'s [scrape-it](https://github.com/IonicaBizau/scrape-it) module to scrape the data from [autogari.ro](https://autogari.ro).

## :cloud: Installation

You can install the package globally and use it as command line tool:

```bash
# Using npm
npm install -g mersul-microbuzelor

# Using yarn
yarn global add mersul-microbuzelor
```

## :clipboard: Using it as a library

```typescript
const mersulMicrobuzelor = require("mersul-microbuzelor");

mersulMicrobuzelor
    .getDepartures("Bucuresti", "Ploiesti", "2024-01-01")
    .then((data) => {
        console.log(data);
    });
```

This will output a list of departures from Bucuresti to Ploiesti on 2024-01-01 in the form of:

```typescript
type DepartureOutput = {
    departure_time: string;
    arrival_time: string;
    price: string;
    company: string;
};
```

## :sparkling_heart: Support my projects

I love open source and I love programming. If you want to show your appreciation for my work, consider supporting me on Patreon or Ko-Fi. This way I can continue to create awesome projects and share them with everyone. Thank you! :heart:

[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/katistix)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/G2G5R30KO)
