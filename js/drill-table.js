let operations = {
    addition: {
        render: (x, y) => x + " + " + y + " = ",
        symbol: "+"
    },
    division: {
        render: (x, y) => x + "\u00f7" + y + " = ",
        symbol: "\u00f7"
    },
    exponentiation: {
        render: (x, y) => x + "<sup>" + y + "</sup> = ",
        symbol: "x<sup>y</sup>"
    },
    logarithm: {
        render: (x, y) => "log <sub>" + x + "</sub> " + y + " = ",
        symbol: "log <sub>x</sub> y"
    },
    multiplication: {
        render: (x, y) => x + "\u22c5" + y + " = ",
        symbol: "\u22c5"
    },
    subtraction: {
        render: (x, y) => x + "\u2212" + y + " = ",
        symbol: "\u2212"
    }
};


/**
 * Return the difference of x and y. That is, return x - y.
 *
 * @param x value from which to be subtracted
 * @param y value to be subtracted from x
 * @return x - y
 */
function difference(x, y)
{
    let difference_ = x - y;

    return difference_;
}


/**
 * Return the logarithm of x and y. That is, return log(x)(y).
 *
 * @param x logarithm base
 * @param y value such that x ^ z = y
 * @return the exponent value z, such that x ^ z = y
 */
function logarithm(x, y)
{
    let value = Math.log(y) / Math.log(x);

    return value;
}


/**
 * Return x raised to the y power. That is, return x ^ y.
 *
 * @param x exponent base
 * @param y exponent
 * @return x ^ y
 */
function power(x, y)
{
    let value = Math.pow(x, y);

    return value;
}


/**
 * Return the product of x and y. That is, return x * y.
 *
 * @param x first factor
 * @param y second factor
 * @return x * y
 */
function product(x, y)
{
    let product_ = x * y;

    return product_;
}


/**
 * Return the quotient of x and y. That is, return x / y.
 *
 * @param x dividend
 * @param y divisor
 * @return x / y if y is not 0, otherwise Infinity
 */
function quotient(x, y)
{
    let quotient_ = NaN;
    if (y != 0) {
        quotient_ = x / y;
    }

    return quotient_;
}


/**
 * Return the sum of x and y. That is, return x + y.
 *
 * @param x first addend
 * @param y second addend
 * @return x + y
 */
function sum(x, y)
{
    let sum_ = x + y;

    return sum_;
}


/**
 * Return an array of integers in the range minValue <= n <= maxValue. The
 * value of minValue must be less than or equal to the value of maxValue,
 * otherwise a RangeError will be thrown.
 *
 * @param minValue minimum value to be used
 * @param maxValue maximum value to be used
 * @return an array of all integers n, such that minValue <= n <= maxValue
 * @throws RangeError if maxValue is less than minValue
 */
function generateAxisValues(
    startValue,
    endValue
)
{
    let valueCount = (endValue - startValue) + 1;
    console.debug("valueCount=" + valueCount);
    let basicValues = [...Array(valueCount).keys()];
    let values = basicValues.map((v) => v + startValue);

    return values;
}
