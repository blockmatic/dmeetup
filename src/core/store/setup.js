import { init } from "@rematch/core";
import createPersistPlugin from "@rematch/persist";
import createSelectPlugin from "@rematch/select";
import createLoadingPlugin from "@rematch/loading";

import { meetups } from "meetups/models";

const setupStore = () => {
  const persistPlugin = createPersistPlugin({
    key: "dmeetup",
    whitelist: ["meetups"]
  });
  const selectPlugin = createSelectPlugin();
  const loadingPlugin = createLoadingPlugin({});

  const store = init({
    plugins: [persistPlugin, loadingPlugin, selectPlugin],
    models: {
      meetups: meetups.model
    }
  });

  return { store };
};

export default setupStore;
