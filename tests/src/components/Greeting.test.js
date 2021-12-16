import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting/>);

        //Act

        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders "good to see you" it the button was NOT clicked', ()=> {
       render(<Greeting/>);

       const goodToSeeYou = screen.getByText("good to see you", {exact: false});
       expect(goodToSeeYou).toBeInTheDocument();
    });
    test('renders "Changed!" if the button was clicked', () => {
      render(<Greeting />);

      //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);
        const changed = screen.getByText("Changed!", { exact: false });
        expect(changed).toBeInTheDocument();
    });
    test('does NOT render "good to see you" if the button was clicked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);
        const output = screen.queryByText("good to see you", { exact: false });
        expect(output).toBeNull();

    })
});
