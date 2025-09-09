import numpy as np

# Suppose this is the data you got from SQL
customers = np.array(["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"])
order_counts = np.array([15, 23, 9, 34, 12, 28, 19])

# Step 1: Sort indices based on order counts (descending order)
sorted_indices = np.argsort(order_counts)[::-1]

# Step 2: Take top 5
top_n = 5
top_indices = sorted_indices[:top_n]

# Step 3: Print results
print("Top 5 customers by order count:")
for idx in top_indices:
    print(f"{customers[idx]}: {order_counts[idx]}")
