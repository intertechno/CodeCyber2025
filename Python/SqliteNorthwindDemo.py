import sqlite3

con = sqlite3.connect("northwind.db")
cur = con.cursor()

res = cur.execute("SELECT COUNT(*) FROM Customers")
print(res.fetchone()[0])

# ----------

res = cur.execute("SELECT CompanyName FROM Customers " +
                  "WHERE Country = 'Finland'")
print([row[0] for row in res.fetchall()])

con.close()
