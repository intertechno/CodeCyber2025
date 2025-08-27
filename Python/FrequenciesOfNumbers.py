numbers = []
print("Please enter a number between 1 and 99:")
user_input = input()
user_number = int(user_input)
numbers.append(user_number)

freq = {}
for n in numbers:
    bracket = n // 10 * 10
    bracket_str = f"{bracket}-{bracket + 9}"
    if bracket_str not in freq:
        freq[bracket_str] = 1
    else:
        freq[bracket_str] += 1

    print(f"Number {n} is in the bracket {bracket_str}")
    # print("Number ", n, " is in the bracket ", bracket_str)

print("------------------")
print(freq)
