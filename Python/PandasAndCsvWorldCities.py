import pandas as pd

cities = pd.read_csv("worldcities.csv")
# print(cities.city)
print(cities[:10])

# --------------------
print("-------------")

step1 = cities[cities["population"] >= 500000]
step2 = step1[step1["population"] <= 1000000]

print(step2.sort_values(["population"], ascending=False))
