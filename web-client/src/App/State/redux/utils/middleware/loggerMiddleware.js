const reduxPrefix = "redux ::";

exports.loggerMiddleware = () => next => action => {
  //TODO: add verbose state flag to turn back on
  //console.log(reduxPrefix, "prev state", JSON.stringify(store.getState()));
  console.log(reduxPrefix, "action", JSON.stringify(action));
  //console.log(reduxPrefix, "next state", JSON.stringify(store.getState()));

  try {
    next(action);
  } catch (err) {
    console.error("CAUGHT ERROR IN REDUX", err);
    console.log(reduxPrefix, "error", JSON.stringify(err));
  }
};
