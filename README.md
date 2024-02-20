# End-Clothing Scraper API

[![Oxylabs promo code](https://user-images.githubusercontent.com/129506779/250792357-8289e25e-9c36-4dc0-a5e2-2706db797bb5.png)](https://oxylabs.go2cloud.org/aff_c?offer_id=7&aff_id=877&url_id=112)

Oxylabs' [End-Clothing Scraper](https://oxylabs.io/products/scraper-api/ecommerce/end-clothing?utm_source=github&utm_medium=repositories&utm_campaign=product) is a data gathering solution allowing you to extract real-time information from an End-Clothing website effortlessly. This brief guide showcases how End-Clothing Scraper works, along with code examples to help you better understand how to use it hassle-free.

### How it works

You can get End-Clothing results by providing your own URLs to our service. We can return the HTML for any page you like.

#### Python code example

The example below illustrates how you can get HTML of End-Clothing page.

```python
import requests
from pprint import pprint

# Structure payload.
payload = {
    'source': 'universal_ecommerce',
    'url': 'https://www.endclothing.com/us/footwear/sneakers'
}

# Get response.
response = requests.request(
    'POST',
    'https://realtime.oxylabs.io/v1/queries',
    auth=('user', 'pass1'),
    json=payload,
)

# Instead of response with job status and results url, this will return the
# JSON response with the result.
pprint(response.json())
```
Find code examples for other programming languages [**here**](https://github.com/oxylabs/end-clothing-scraper/tree/main/code%20examples)

#### Output Example
```json
{
  "results": [
    {
      "content": "<!DOCTYPE html><html lang=\"en\"><head><meta charSet=\"utf-8\"/><meta name=\"viewport\" content=\"width=dev ... </html>",
      "created_at": "2024-02-20 12:47:14",
      "updated_at": "2024-02-20 12:47:16",
      "page": 1,
      "url": "https://www.endclothing.com/us/footwear/sneakers",
      "job_id": "7165688347711527938",
      "status_code": 200
    }
  ]
}
```
With our End-Clothing Scraper, you can seamlessly pull public data from any End-Clothing webpage. Gather essential material details, like garment specifications, user ratings, detailed descriptions, and pricing, to understand the fashion trends better and always keep a competitive edge. For any queries, feel free to reach out to our customer service team through live chat or drop us an email at hello@oxylabs.io.