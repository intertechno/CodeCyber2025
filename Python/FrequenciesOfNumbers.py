
number = [5, 23, 33, 17]

for n in number:
    bracket = n // 10 * 10
    bracket_str = f"{bracket}-{bracket + 9}"

    print(f"Number {n} is in the bracket {bracket_str}")
