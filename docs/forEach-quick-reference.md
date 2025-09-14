# Quick forEach Reference Card

## What is forEach?

A JavaScript array method that executes a function for each element in an array.

## Basic Syntax

```javascript
array.forEach((element, index, array) => {
  // Do something with element
});
```

## Simple Example

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
// Output: 2, 4, 6, 8, 10
```

## Parameters Explained

1. **element** - The current item being processed
2. **index** (optional) - Position of current item (0, 1, 2...)
3. **array** (optional) - The original array

## When to Use forEach

✅ **Use forEach when:**

- Performing side effects (logging, updating DOM)
- Processing each element without creating new data
- Iterating through arrays for actions

❌ **Don't use forEach when:**

- You need to return a new array → use `map()`
- You need to filter data → use `filter()`
- You need to find something → use `find()`
- You need to break out early → use `for` loop

## React Native Example

```jsx
const UserList = ({ users }) => {
  const userCards = [];

  users.forEach((user, index) => {
    userCards.push(
      <View key={index} style={{ padding: 10 }}>
        <Text>{user.name}</Text>
      </View>
    );
  });

  return <View>{userCards}</View>;
};
```

## Key Points

- forEach always returns `undefined`
- Cannot break out early (use `return` to skip current iteration)
- Does not modify the original array (unless you explicitly do so)
- Executes in order from first to last element
- Skips empty slots in sparse arrays

## Common Pattern: Building Elements

```javascript
const items = ["apple", "banana", "orange"];
const elements = [];

items.forEach((item, index) => {
  elements.push(<Text key={index}>{item}</Text>);
});
```

## vs Other Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - side effects only
numbers.forEach((n) => console.log(n));

// map - transform and return new array
const doubled = numbers.map((n) => n * 2);

// filter - get subset based on condition
const evens = numbers.filter((n) => n % 2 === 0);
```

---

**Remember:** forEach is perfect for performing actions on each array element when you don't need to create new data!
