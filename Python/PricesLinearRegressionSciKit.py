import pandas as pd
from sklearn.linear_model import LinearRegression
# from sklearn import linear_model

prices = pd.read_csv("Prices.csv")
print(prices)

model = LinearRegression()
years = prices.drop("price", axis="columns")
# print(years)
model.fit(years, prices.price)
print("Regression model created.")

prediction = model.predict([[2020]])
print("Price prediction for year 2020:", prediction)

prediction = model.predict([[2021]])
print("Price prediction for year 2021:", prediction)

prediction = model.predict([[2022]])
print("Price prediction for year 2022:", prediction)

prediction = model.predict([[2025]])
print("Price prediction for year 2025:", prediction)
