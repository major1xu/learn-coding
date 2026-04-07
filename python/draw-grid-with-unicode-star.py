# Example: 5x5 grid with a central Unicode star
grid = [[' ' for _ in range(5)] for _ in range(5)]
grid[2][2] = '\u2605'  # ★

for row in grid:
    print(" ".join(row))
