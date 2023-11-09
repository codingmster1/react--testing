import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest"; //allows these to be defined and to test the enviroment properly
import userEvent from "@testing-library/user-event"; //user event pulled straight from npm install file
import App from "./App";


describe("App component", () => {
    it("renders magnificent monkeys", () => {
        // since screen does not have the container property, we'll destructure render to obtain a container for this test
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = screen.getByRole("button", { name: "Click Me" });

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    });
});
