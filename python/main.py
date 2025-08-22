
from google.cloud import bigquery
import requests
import json
from datetime import datetime

def run_query():
    client = bigquery.Client(project="your-project-id") 

    query = """
    -- TODO: Replace with your real query
    SELECT CURRENT_TIMESTAMP() AS now
    """

    try:
        query_job = client.query(query)
        rows = list(query_job.result())
        print("Query results:")
        for row in rows:
            print(dict(row))

        # Send results to API (placeholder)
        send_to_api(rows)

    except Exception as e:
        print("ERROR:", e)


def send_to_api(records):
    """
    Placeholder function for API sending.
    Modify URL, headers, and payload as needed.
    """


if __name__ == "__main__":
    run_query()