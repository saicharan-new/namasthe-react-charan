// import Body from "../Body";
// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import MOCK_DATA_f from "../Mocks/mockResListData.json";
// import { act } from "react";
// import { BrowserRouter } from "react-router-dom";

// //mock fetch function
// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA_f)
//         }
//     })
// })

// it("should render the body component with search button", async () => {
    
//    await act( async () => 
//     render(
//     <BrowserRouter>
//         <Body/>
//     </BrowserRouter>)
//     );

//     const searchBtn = screen.getByRole("button", {name : search})

//     expect(searchBtn).toBeInTheDocument();
// })