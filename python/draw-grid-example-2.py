# Create a 5x5 grid filled with spaces
grid = [[" " for _ in range(5)] for _ in range(5)]

# Assign Unicode characters to specific (row, col) positions
grid[0][0] = "\u2605"  # Black Star ★
grid[2][2] = chr(9829)  # Black Heart Suit ♥
grid[4][4] = "Ω"        # Greek Capital Letter Omega

# Print the grid
for row in grid:
    print(" ".join(row))
