import sqlite3

con = sqlite3.connect("northwind.db")
cur = con.cursor()

sql = """SELECT
    c.CustomerID,
    c.CompanyName,
    COUNT(o.OrderID) AS OrderCount
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID, c.CompanyName
ORDER BY OrderCount DESC;"""

cur.execute(sql)
rows = cur.fetchall()

for row in rows:
    print(row)

con.close()
