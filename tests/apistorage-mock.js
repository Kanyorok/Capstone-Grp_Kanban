const apiStorageMock = (() => {
    let store = {};
    return {
      clear: () => {
        store = {};
      }
    };
  })();

  export default apiStorageMock;
