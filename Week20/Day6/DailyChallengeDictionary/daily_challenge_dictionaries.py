'''Challenge 1
Ask a user for a word
Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

Make sure the letters are the keys.
Make sure the letters are strings.
Make sure the indexes are stored in a list and those lists are values.
Examples

"dodo" ➞ { "d": [0, 2], "o": [1, 3] }

"froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

"grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}'''
user_word = input("Please enter a word: ")
letter_indexes = {}

for i in range(len(user_word)):
    letter = user_word[i]
    if letter not in letter_indexes:
        letter_indexes[letter] = [i]
    else:
        letter_indexes[letter].append(i)

print(letter_indexes)

'''Challenge 2
Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
Sort the list in alphabetical order.
Return “Nothing” if you can’t afford anything from the store.
Examples

The key is the product, the value is the price

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

➞ ["Bread", "Fertilizer", "Water"]

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

➞ "Nothing"'''

items_purchase = {
  "Water": 1,
  "Bread": 3,
  "TV": 1000,
  "Fertilizer": 20,
}

wallet = 300

items_purchase2 = {
    "Apple": 4,
    "Honey": 3,
    "Fan": 14,
    "Bananas": 4,
    "Pan": 100,
    "Spoon": 2,
}

wallet2 = 100

items_purchase3 = {
    "Phone": 999,
    "Speakers": 300,
    "Laptop": 5000,
    "PC": 1200
}

wallet3 = 1

def affordable_items(items_purchase, wallet):

    affordable = [item for item, price in items_purchase.items() if price <= wallet]
    affordable.sort()
    return affordable if affordable else "Nothing"

print(affordable_items(items_purchase, wallet))
print(affordable_items(items_purchase2, wallet2))
print(affordable_items(items_purchase3, wallet3))


