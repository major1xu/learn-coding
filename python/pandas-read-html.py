import pandas as pd

# Fetch all tables from a webpage
url = "https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub"
tables = pd.read_html(url, encoding='utf-8')

# Select the first table on the page
df = tables[0]
print(df.head())
#print(df.info())

# Create a 5x5 grid filled with spaces
grid = [[" " for _ in range(4)] for _ in range(4)]

for row in df.itertuples():
    print(row[1], row[3], row[2])  # index 0 is the row index, index 1 is the first column
    # Assign Unicode characters to specific (row, col) positions
    if(row[1] != "x-coordinate"): 
        grid[int(row[1])][int(row[3])] = row[2] 

# Print the grid
for row in grid:
    print(" ".join(row))