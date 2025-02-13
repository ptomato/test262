// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/ArrayConcat.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function ExplicitToString(value)
{
    var result;
    if (value instanceof Array)
    {
        result = "[";

        for (var idx = 0; idx < value.length; idx++)
        {
            if (idx > 0)
            {
                result += ", ";
            }

            var item = value[idx];
            result += ExplicitToString(item);
        }

        result += "]";
    }
    else if (value == null)
    {
        result = "'null'";
    }
    else if (value == undefined)
    {
        result = "'undefined'";
    }
    else
    {
        result = value /* .toString() */;
    }

    return result;
}


function Print(name, value)
{
    var result = name + " = " + ExplicitToString(value);
   
    WScript.Echo(result);
}

var a = [1, 2, 3];
Print("a", a);

var b = a.concat(4, 5, 6);
Print("b", b);

var c = [1, [2, 3]];
Print("c", c);

var d = a.concat(4, [5, [6, [7]]]);
Print("d", d);

var e = a.concat([4, 5], [6, 7], [8, [9, [10]]]);
Print("e", e);

chakraCoreAdaptor.verifyTest(`a = [1, 2, 3]
b = [1, 2, 3, 4, 5, 6]
c = [1, [2, 3]]
d = [1, 2, 3, 4, 5, [6, [7]]]
e = [1, 2, 3, 4, 5, 6, 7, 8, [9, [10]]]
`);
