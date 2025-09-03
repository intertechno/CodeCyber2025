import sqlite3

con = sqlite3.connect("northwind.db")
cur = con.cursor()

res = cur.execute("SELECT COUNT(*) FROM Customers")
print(res.fetchone())

# ----------

res = cur.execute("SELECT CompanyName FROM Customers " +
                  "WHERE Country = 'Finland'")
print(res.fetchall())

con.close()
