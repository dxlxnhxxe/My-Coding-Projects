#booleans

print(True)
print('True')

print(type(True))  #this type is a bool
print(type('True'))  #this type is a string

#testing whether these statements are correct
print(5==5)
print(6==5)

#incorporating the if statement with a boolean
x = 11
y = 5
if x % y == 0:
    print(True)
else:
    print(False)

#while loop
number = 1
while number < 4:
    print(number)
    if number == 4:
        break
    number = number + 1

else:
    print('number is no longer less than 4')
