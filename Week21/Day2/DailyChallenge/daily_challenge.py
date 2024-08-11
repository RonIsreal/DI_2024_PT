'''Given a “Matrix” string:

    7i3
    Tsi
    h%x
    i #
    sM
    $a
    #t%
    ^r!


The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
A grid means that you could potentially break it into rows and columns, like here:

7	i	3
T	s	i
h	%	x
i		#
s	M
$	a
#	t	%
^	r	!


To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

Using his technique, try to decode this matrix.

Hints:
Use
● lists for storing data
● Loops for going through the data
● if/else statements to check the data
● String for the output of the secret message

Hint (if needed) : Look at the remote learning “Matrix” videos
'''

matrix = [
    "7i3",
    "Tsi",
    "h%x",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

message = ""

for i in range(len(matrix[0])):
    column_chars = ""
    for j in range(len(matrix)):
        # Extract the character at position (j,i) in the matrix
        char = matrix[j][i]
        # Check if the character is an alpha character
        if char.isalpha():
            column_chars += char
        else:
            column_chars += " "
    # Replace any group of non-alpha characters with a space
    column_chars = "".join([x if x.isalpha() else " " for x in column_chars])
    # Add the processed column to the message string
    message += column_chars

# Print the extracted message
print(message)
