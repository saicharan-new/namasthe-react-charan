import RestaurentCard,{withDiscountLabel} from "../RestaurentCard";
import { render, screen } from "@testing-library/react";
import MOCK__DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("should render RestaurentCard component with props Data", () => {
    render(<RestaurentCard resData={MOCK__DATA}/>)

    const resName = screen.getByText("Pizza Hut");

    expect(resName).toBeInTheDocument();
})
it("should render RestaurentCard component with props Data", () => {
    const WrappedCard = withDiscountLabel(RestaurentCard);
    render(<WrappedCard resData={MOCK__DATA} />);
  
    const discountLabel = screen.getByText(/₹300 OFF/i);
    expect(discountLabel).toBeInTheDocument();
})