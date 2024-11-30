# namasthe react 
https://github.com/namastedev/namaste-react

...
# parcel 
- dev buld 
- local server
- HMR = hot module replacement
- file watching algorithem 0- written in c++
- caching - faster builds
- image optimization
- minification
- bundling
- compress files
- consistant Hashing
- code splitting
- differential bundling - support older browsers
- diagnostic
- error suggestion
- https
- tree shaking - remove unsed code
- different dev and prod bundles


# ep-2 
 - commented code
 // const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [React.createElement("div", { id: "children" }, [
//     React.createElement("h1", { id: "h1" }, "This is namaste React 🗿"),
//     React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
//   ]),React.createElement("div", { id: "children2" }, [
//     React.createElement("h1", { id: "h1" }, "hi this is child's h1"),
//     React.createElement("h2", { id: "h2" }, "hi this is child's h2"),
//   ])]

// );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "hello World From React😉"
// // );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

# ep-3 
- // const Head = () => {
//   return <h1>hi</h1>;  // functional component
// };

// const Title = function () {
//   return (
//     <h1 className="title" tabIndex="5">
//       Namste react 🚀🗿
//     </h1>
//   );
// };

// react element
// const jsxheading = <h1> hi </h1> this is react element babael understand this as jsx
// const elem = <spam>React element</spam>;

const title = (
  <h1 className="title" tabIndex="5">
    Namste react 🚀🗿
  </h1>
);

//react components functional component
// component composition ->using component inside a component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namasthe React Functional Component</h1>
      {/* <Title /> */}
      {/* <h2>{100+200}</h2> */}
      
      {title}
    </div>
  );
};


{/* we can also use index as key but its not a good pattern. ex: (restaraunt, index), key is uesed for performance imporvement and also to reduce warnings */}
        {/* not using key(not accepatable warning) <<< index as key <<<<<<< unique id (best practice) */}
        {/* <RestaurentCard resData={resList[0]}/>
            <RestaurentCard resData={resList[1]}/>
            <RestaurentCard resData={resList[2]}/>
            <RestaurentCard resData={resList[3]}/>
            <RestaurentCard resData={resList[4]}/> */}

# React Hooks  - normal js utility functions
- useState()
- useEffect()