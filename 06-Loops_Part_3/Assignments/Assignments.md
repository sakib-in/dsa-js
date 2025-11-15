\*Q01. ISBN Number
Description: An ISBN (International Standard Book Number) is a unique 10-digit
number assigned to books. The ISBN is valid if the sum of its digits, each
multiplied by its position (1 to 10), is divisible by 11.
Example
Input: 02013145
Output: Invalid ISB
Explanation: The sum of the digits multiplied by their positions is not
divisible by 11
Input: 0471958697
Output: Valid ISB
Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.
Hint: Use a loop to multiply each digit by its respective position and check
divisibility by 11.

\*Q02. HCF/GCD
Description: The Highest Common Factor (HCF) or Greatest Common Divisor
(GCD) of two numbers is the largest number that divides both numbers
without leaving a remainder.
Example
Input: a = 12, b = 1
Output: 6
Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}.
Common factors: {1,2,3,6}. The highest is 6.
Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).

\*Q03. Harshad Number
Description: A number is a Harshad number if it is divisible by the sum of its
digits.
Example
Input: 1
Output: Harshad Numbe
Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.
Hint: Extract digits using modulo (%) and integer division (//).

\*Q04. Perfect Square
Description: A number is a perfect square if it is the square of an integer.
Example
Input: 2
Output: Perfect Squar
Explanation: 5 × 5 = 25.
Hint: Use sqrt(N), check if it’s an integer.

\*Q05. Abundant Number
Description: A number is abundant if the sum of its proper divisors is greater
than the number itself.
Example
Input: 1
Output: Abundant Number
Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).
Hint: Use a loop to find proper divisors.

\*Q06. Fibonacci Series using Loop
Description: Print Fibonacci series up to N terms using a loop.
Example
Input: N = 6
Output: 0, 1, 1, 2, 3, 5
Hint: Use a loop and store previous two numbers.

\*Q07. Find Numbers with Exactly X Divisors (Java)
Description: Find numbers that have exactly X divisors.
Example
Input: X = 3
Output: 4, 9, 25, 4
Explanation: These numbers have exactly three divisors.
Hint: Use prime factorization.

\*Q08. Prime Factors in Java
Description: Find all prime factors of a number.
Example
Input: 30
Output: 2, 3, 5
Hint: Use division method

\*Q09. Calculate Area using Switch Statement
Description: Find the area of a circle, rectangle, or triangle using switch.
Example
Input: Choice = Circle, Radius = 5
Output: Area = 78.5
Hint: Use switch with case statements

\*Q10. Neon Number
Description: A number where the sum of digits of its square equals the
number itself.
Example:
Input: 9
Output: Neon Numbe
Explanation: 9² = 81, sum of digits = 9.
Hint: Find square, sum digits, compare.

\*Q11. Sum of Even Indexed Fibonacci Numbers
Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth
Fibonacci number:
Example:
Input: N = 4
Output: 33
Hint: Use a loop and maintain a sum for even-indexed elements.

\*Q12. Find the Largest Digit in a Number
Description: Find the largest digit in a given number.
Example
Input: 54829
Output: 9
Hint: Extract digits using modulo (% 10) and compare

\*Q13. Find LCM of Two Numbers
Description: Find the Least Common Multiple (LCM) of two numbers.
Example
Input: a = 12, b = 15
Output: 60
Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).

\*Q14. Find the Sum of Even Digits in a Number
Description: Find the sum of all even digits in a given number.
Example
Input: 2384
Output: 14
Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum

\*Q15. Number of Days in a Month
Description: Find the number of days in a given month and year (to handle leap
years).
Example
Input: Month = 2, Year = 2024
Output: 29
Hint: Use conditions
31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec
30 Days: Apr, Jun, Sep, Nov
February: 28 or 29 (check for leap year using year % 4 == 0 but not year %
100 != 0 unless year % 400 == 0).
