export const createProject = project => {
  return (dispatch, getState) => {
    // Make a async call to db.
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
