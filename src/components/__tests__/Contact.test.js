import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contacr us page test case", () => {
    // it and test are same funs , it usually makes it easier to read
    it(" Should load contact us component", () => {

        render(<Contact/>);
    
       const heading = screen.getByRole("heading");
       
       expect(heading).toBeInTheDocument();
    })
    test(" Should load button inside Contact component", () => {
    
        render(<Contact/>);
    
       const button = screen.getByRole("button")
       
       expect(button).toBeInTheDocument();
    })
    it(" Should load input name inside Contact component", () => {
    
        render(<Contact/>);
    
       const inputName = screen.getByPlaceholderText("name")
       
       expect(inputName).toBeInTheDocument();
    })
    test(" Should load 2 input boxes inside Contact component", () => {
    
        render(<Contact/>);
        //quearing
       const inputBox = screen.getAllByRole("textbox")
       //assertion
    //    console.log(inputBox)
       expect(inputBox.length).toBe(2)
    })
})

