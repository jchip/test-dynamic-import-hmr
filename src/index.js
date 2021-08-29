const getModule = () => import("./app1");

console.log("oops index entry");

setTimeout(() => {
  getModule().then(m => {
    console.log("index abc starting");
    m.app();
  });
}, 1000);

if (module.hot) {
  module.hot.accept("./app1", () => {
    console.log("hot accept triggered for ./app1");
    getModule().then(m => {
      console.log("hot accept app1's module");
      m.app("HMR: ");
    });
  });
}
