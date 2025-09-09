import matplotlib.pyplot as plt
import numpy as np

# Create an array with 100 random numbers
luvut = np.random.randint(1, 21, size=100)
# print(luvut)

# Calculate the mean of the random numbers
mean_value = np.mean(luvut)
print(mean_value)

# Calculate the frequencies of the numbers
unique_numbers, counts = np.unique(luvut, return_counts=True)
frequencies = dict(zip(unique_numbers, counts))

# Print the frequencies
print("Frequencies:")
for number, count in frequencies.items():
    print(f"Number {number}: {count} pcs")

# Use the Matplotlib library to create a bar chart of the frequencies.
plt.bar(frequencies.keys(), frequencies.values(), color='blue')
plt.xlabel('Number')
plt.ylabel('Frequency')
plt.title('Frequencies of Random Numbers')
plt.show()
