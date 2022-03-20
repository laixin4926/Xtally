import recordStore from "./recordStore";
import tagStore from "./tagStore";

const store = {
  ...recordStore,
  ...tagStore,
  //tag store
};

export default store;
