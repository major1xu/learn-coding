import pandas as pd

# Fetch all tables from a webpage
url = "https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub"
tables = pd.read_html(url)

# Select the first table on the page
df = tables[0]
print(df.head())
