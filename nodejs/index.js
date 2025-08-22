// query-and-send.js
// Sample BigQuery client with placeholder API sender

import { BigQuery } from '@google-cloud/bigquery';

// Configure BigQuery (projectId can be auto-detected if GOOGLE_APPLICATION_CREDENTIALS is set)
const bigquery = new BigQuery({
  projectId: 'test-tecnicos-apps', // optional if already set in env
});

async function runQuery() {
  const query = `
    -- TODO: Replace with your real query
    SELECT CURRENT_TIMESTAMP() AS now
  `;

  const options = {
    query,
    location: 'US', // change if dataset is in EU
  };

  try {
    const [rows] = await bigquery.query(options);
    console.log('Query results:');
    console.table(rows);

    // Send to API (placeholder)
    await sendToApi(rows);

  } catch (err) {
    console.error('ERROR:', err);
  }
}

async function sendToApi(records) {
    console.log(records);
}

runQuery();