operation = input('What operation do you want to use? Type in Add, Sub, Multiply, or Divide. ')
operation = operation.lower()
while operation == 'add' or operation == 'sub' or operation == 'multiply' or operation == 'divide':
    print('Yes!')

number1 = input('Enter Your first number ')
while str.isalpha(number1):
    print('The Number you have entered in not Numeric. Please enter a valid number.')
    number1 = input('Enter Your First Valid Number ')

number2 = input('Enter Your second number ')
while str.isalpha(number2):
    print('The Number you have entered in not Numeric. Please enter a valid number.')
    number2 = input('Enter Your First Valid Number ')
print(int(number1) + int(number2))
