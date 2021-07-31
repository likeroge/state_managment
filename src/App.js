import bridge from "@vkontakte/vk-bridge";
import { useContext, useEffect } from "react";
import { Store } from "./hoc/StoreProvider";
import { AppWrapper } from "./styles/UiKit";

function App() {
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        // schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        schemeAttribute.value = "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
    }

    fetchData();
  }, []);

  const store = useContext(Store);
  console.log(store.users.users);

  return (
    <AppWrapper>
      <h1>Hello World!</h1>
    </AppWrapper>
  );
}

export default App;
