# to run it on a command line window, do this
# python decrypt-a-message.py "https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub"
# tested using python 3.11.3 via 
# lias python='~/anaconda3/bin/python'
# 
import argparse
import pandas as pd

parser = argparse.ArgumentParser(description="A sample script")
parser.add_argument("fileURL", help="Input file URL", type=str)  # Positional argument
#parser.add_argument("square", help="display a square of a given number", type=int)
parser.add_argument("-v", "--verbose", action="store_true", help="Increase output verbosity")  # Optional flag

args = parser.parse_args()
print(f"Hello, {args.fileURL}")
if args.verbose:
    print("Verbosity is on")

#print(args.square**2)

# Fetch all tables from a webpage
url = args.fileURL
print(url)
tables = pd.read_html(url, encoding="utf-8")

# Select the first table on the page
df = tables[0]

grid_size = len(df)
grid = [[" " for _ in range(grid_size)] for _ in range(grid_size)]

for row in df.itertuples():
    print(row[1], row[3], row[2])  
    # Assign Unicode characters to specific (row, col) positions
    if(row[1] != "x-coordinate"): 
        grid[int(row[1])][int(row[3])] = row[2] 

# Print the grid
for row in grid:
    print(" ".join(row))