import turtle

# Create a turtle object
t = turtle.Turtle()

# Loop 4 times to draw each side
for _ in range(4):
    t.forward(100)  # Move forward 100 pixels
    t.right(90)      # Turn 90 degrees right

# Keep the window open
turtle.done()
