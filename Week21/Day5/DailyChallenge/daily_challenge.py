'''Exercise 1: Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
Use List Comprehension
Example:

Suppose the following input is supplied to the program: without,hello,bag,world
Then, the output should be: bag,hello,without,world'''

my_list = list(input("Please choose some words and separate them with a comma: ").split(","))
sorted_list = sorted([x for x in my_list])
print(sorted_list)

'''Challenge 2 : Longest Word
Instructions
Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
Examples

longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") ➞ "forever."

longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
'''

def longestWord(sent):
    words = sent.split()
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

print(longestWord("Forgetfulness is by all means powerless!"))
        