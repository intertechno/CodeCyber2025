my_str = "ABCDEFGH"

print(my_str[0])   # A
print(my_str[1])   # B
# ...
print(my_str[7])   # H

# -------------------------

print(my_str[0:3])  # ABC
print(my_str[:3])   # ABC
print(my_str[3:])   # DEFGH
print(my_str[:])    # ABCDEFGH

# -------------------------
print("-------------")

print(my_str[1:5:2]) # BD
print(my_str[::2])   # ACEG
