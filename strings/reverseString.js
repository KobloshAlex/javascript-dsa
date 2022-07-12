function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") return "";

  const arr = str.split("");

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let tmp;
    tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;

    start++;
    end--;
  }

  return arr.join("");
}

const reverse = (str) => str.split("").reverse().join("");

console.log(reverseString("str"));


// ["a", "b", "c", "d", "e"]

// ["e", "d", "c", "b", "a"]
