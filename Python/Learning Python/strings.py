# strings

# we have already covered strings. integers. floats. booleans, and lists

# integers, floats and booleans are all considdeered to be simple data types
# they cannot be broken down
# lists and strings are different! they are made up of smaller pieces which CAN be broken down

# we already know what strings are!

print('Hello, World!')
print(type('Hello, World!'))

# Operations on strings
# addition sign concatination
Greeting = 'Hello, '
Name = 'Dylan'
print(Greeting + Name)

print('My shoe size is', 5,'and my age is', 21)
# * operator
print(Greeting*3)
print(Greeting + Name*3)

# Index operator
Name = 'Brad'
print(Name[2])
print(Name[0] + Name[3])

# Slicing strings
print(Name[0:4])
print(Name[:2])
print(Name[2:])

# Lower and uppercase
Name = 'Dylan'
print(Name.lower())
print(Name.upper())

# count how many times a character appears in a string
print(Name.count('i'))

# Replace specific characters with other characters
print(Name.replace('l', 'd'))
Name = 'Dylan'
New_Name = Name.replace('l', 'd')
print(New_Name)

# Finding the length of a string
print(len(Name))

# Format strings
# your_name = input('Your name: ')
# hello = 'Hello {}'.format(your_name)
# print(hello)

# Each letter in python is assigned to a specific number!
print('orange' < 'strawberry')
print(ord('o'))
print(chr(78))
# We can perform maths on strings!

# in and not operators
fruit = 'banana'
print('a' in fruit)
print('s' not in fruit)

# Incorporate a few things we've learnt so far
x = 'Hello'
y = ''
for character in x:
    y = y + character.upper()
print(y)