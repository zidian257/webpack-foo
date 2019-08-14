export function bar() {
  return "bar";
}

export function dd() {}

console.log("dd", bar());

window.bar = 3;
