import {render} from "@testing-library/react"
import App from "./App";

test("Renders contact", () => {
    const {getByText} = render(<App/>);
});