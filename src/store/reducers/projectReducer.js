const initState = {
  projects: [
    { id: "1", title: "asdf", content: "qwerqwer" },
    { id: "2", title: "fdgh", content: "fghjkgfj" },
    { id: "3", title: "zcxv", content: "vbnmvbmm" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("aa", action);
  }
  return state;
};

export default projectReducer;
