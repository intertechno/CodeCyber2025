sales_data = {
    1: 150,
    2: 100,
    3: 40,
    4: 244
}

sorted_sales = sorted(sales_data.items(), key=lambda item: item[1], reverse=True)
print(sorted_sales)
