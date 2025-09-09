my_str = "saippuakauppias"

# Check if the string is a palindrome
is_palindrome = my_str == my_str[::-1]

if is_palindrome:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
