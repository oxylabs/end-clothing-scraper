import fetch from 'node-fetch';

const username = 'YOUR_USERNAME';
const password = 'YOUR_PASSWORD';
const body = {
  'source': 'universal_ecommerce',
  'url': 'https://www.endclothing.com/us/footwear/sneakers',
};
const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  }
});

console.log(await response.json());