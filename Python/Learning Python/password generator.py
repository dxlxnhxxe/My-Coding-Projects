# mini project - random password project

# Importing the relevant modules import random
from random import randint

# All uppercase password
password = ''
for i in range(5):
    i = chr(randint(65, 90))
    for j in range(5):
        j = chr(randint(65, 90)).lower()
    password = str(password) + i + j
print(password)

# Upper and lowercase password
password = ''
for i in range(5):
     i = chr(randint(65, 90))
     for j in range(5):
         j = chr(randint(65, 90)).lower()
     password = str(password) + i + j
print(password)
