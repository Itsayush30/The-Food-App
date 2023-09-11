import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("https://images-platform.99static.com//U4hUSEXZ4IVHPuxQtNVYMxi81xw=/0x1:1000x1001/fit-in/500x500/99designs-contests-attachments/78/78942/attachment_78942547");
});
test("Online Status should be green on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});
test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart- 0 items");
});