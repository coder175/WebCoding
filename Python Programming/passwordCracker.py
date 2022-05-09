from itertools import permutations
import random
amount = input('How many digits do you want the secret password to be? ')
while not amount.isdigit():
    print('Please Give a number')
    amount = input('How many digits do you want the secret password to be? ')
amount = int(amount)
amount = amount - 1
y = '1'
for x in range(amount):
    y = y + '0'
password = random.randint(int(y), int(y) * 9)
print(password)

for z in permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], amount + 1):
    randomNumber = ''.join(str(z))
    print(z)
    if randomNumber == password:
        print('Password Cracked! it is: ' + str(z))