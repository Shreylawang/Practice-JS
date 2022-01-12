# Task #1

Create a function that accepts 3 numbers in arugements and return the highest number among them. Also consider circumstance where all the numbers are of equal value.

# Solution

```javascript
function greater(a,b,c)
{
  let temp;
  if(a>b || a==b) temp=a
  else temp=b
  if(temp>c || temp==c) temp
  else temp=c
  console.log(temp)
}
greater(10,20,10)
```
