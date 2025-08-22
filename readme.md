# Martech Full-Stack Live Test Starter

This repository contains **two starter clients** (Node.js and Python) for the live test.  
Your task will be to:

1. **Write a BigQuery query** that normalizes `gclid` values (provided separately in the test statement).  
2. Use the starter code to **fetch results from BigQuery**.  
3. **Send the results to an API** — in this case, we will use [https://webhook.site](https://webhook.site) so you can see exactly what your code posts.

---

## Repository Structure

```
node.js/
  index.js    # Node.js starter code
python/
  main.py    # Python starter code
README.md              # this file
```

---

## Prerequisites

- Access to **Google BigQuery** with a service account that can run queries.  
- A local environment with either:
  - **Node.js 18+** (for the Node.js version), or
  - **Python 3.9+** (for the Python version).  

You need to set up **Google Cloud authentication** before running:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
```

---

## How to use webhook.site

1. Go to [https://webhook.site](https://webhook.site).  
2. Copy your **unique URL** (it will look like `https://webhook.site/#!/<uuid>`).  
3. Replace the placeholder API URL in the code with your webhook URL:
   - In **Node.js** (`query-and-send.js`):
     ```js
     const url = "https://webhook.site/<your-uuid>";
     ```
   - In **Python** (`query_and_send.py`):
     ```python
     url = "https://webhook.site/<your-uuid>"
     ```
4. Run the script — the payload will be posted to your webhook.  
5. Check the webhook.site page to see the incoming request body, headers, etc.

---

## Node.js Usage

Install dependencies:
```bash
cd node.js
npm install
```

Run:
```bash
node query-and-send.js
```

---

## Python Usage

Install dependencies:
```bash
cd python
pip install -r requirements.txt
```

Contents of `requirements.txt`:
```
google-cloud-bigquery
requests
```

Run:
```bash
python query_and_send.py
```

---

## What you need to implement

- Replace the **placeholder query** with your real BigQuery SQL.  
- Adapt the **payload structure** so that it sends:
  ```json
  {
    "date": "YYYY-MM-DD",
    "records": [
      { "user_id": "...", "gclid": "...", "click_ts": "ISO-8601", "source": "..." }
    ]
  }
  ```
- Post this JSON to your webhook.site URL.  
- Verify in webhook.site that the payload matches expectations.

---

## Notes

- The code already has a `sendToApi` / `send_to_api` function — just update the URL and payload.  
- If you cannot connect to BigQuery in your environment, you may **simulate** query results by hardcoding a small list of rows in the script.  
- Be ready to explain your code and your reasoning during the live test.
