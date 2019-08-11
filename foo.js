function throwsError() {
  throw new Error("你也配过七夕！");
}

const obj = {};

function* genT() {
  yield throwsError();
  yield obj;
}

const foo = genT();

function Object() {
  return foo.next().value;
}

export { Object };
