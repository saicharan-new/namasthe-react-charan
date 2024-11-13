/**
 *
 * <div>
 *      <div>
 *      <h1>
 * <div>
 * <div>
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "h1" }, "hi this is child's h1"),
    React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
  ]),React.createElement("div", { id: "children2" }, [
    React.createElement("h1", { id: "h1" }, "hi this is child's h1"),
    React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
  ])]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello World From React😉"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
