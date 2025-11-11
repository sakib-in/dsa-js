1.  Increment and Decrement Operators
    Q1:
    let i = 11;
    i = i++ + ++i;
    console.log(i);

    Q2:
    let a = 11, b = 22, c;
    c = a + b + a++ + b++ + ++a + ++b;
    console.log("a=" + a);
    console.log("b=" + b);
    console.log("c=" + c);

    Q3:
    let i = 0;
    i = i++ - --i + ++i - i--;
    console.log(i);

    Q4:
    let b = true;
    b++;  
    console.log(b);

2.  Complex Increment and Decrement Operations
    Q5:
    let i = 1, j = 2, k = 3;
    let m = i-- - j-- - k--;
    console.log("i=" + i);
    console.log("j=" + j);
    console.log("k=" + k);
    console.log("m=" + m);

    Q6:
    let a = 1, b = 2;
    console.log(--b - ++a + ++b - --a);

    Q7:
    let i = 19, j = 29, k;
    k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
    console.log("i=" + i);
    console.log("j=" + j);
    console.log("k=" + k);


3.  Syntax Errors and Logical Issues
    Q8:
    let i = 11;
    let j = --(i++);


    Q9:
    let m = 0, n = 0;
    let p = --m _ --n _ n-- _ m--;
    console.log(p);

    Q10:
    let a = 1;
    a = a++ + ++a _ --a - a--;
    console.log(a);

    Q11:
    let a = 11++;
    console.log(a);

    Q12:
    let i = 0, j = 0;
    console.log(--i _ i++ _ ++j \* j++)
