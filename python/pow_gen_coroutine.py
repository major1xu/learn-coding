import math

def exponential_generator():
    """Coroutine to calculate exponential approximation (e^x)"""
    x = yield # Receive x value
    term = 1
    total_sum = 1
    n = 1
    
    while True:
        term *= (x / n)
        total_sum += term
        # Yield total sum so far, receive new x if needed (optional)
        new_x = yield total_sum 
        if new_x is not None:
            # Reset if a new x is provided
            x = new_x
            term = 1
            total_sum = 1
            n = 1
        else:
            n += 1

# --- Usage ---
# 1. Initialize
gen = exponential_generator()
next(gen) # Prime the generator

# 2. Set value for x=2
print(gen.send(2))  # Initial yield (sum = 1+x) -> 3.0
print(next(gen))    # Next term -> 5.0
print(next(gen))    # Next term -> 6.333...

# 3. Use built-in for validation
print(math.exp(2))  # 7.389...
