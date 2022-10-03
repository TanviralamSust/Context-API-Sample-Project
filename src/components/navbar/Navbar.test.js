import {render, screen, act} from "@testing-library/react";
import user from '@testing-library/user-event'
import Navbar from "../Navbar";
import {FundingProvider} from "../../context/FundingContext";
import {MemoryRouter} from "react-router-dom";

describe('Render Navbar', () => {
    test("render serach input field", async () => {
        user.setup();
        const onSearch = jest.fn();
        await act( () => {
            render(<MemoryRouter><Navbar/></MemoryRouter>
            , {
            wrapper: FundingProvider
        })
        });
        const searchInput = screen.getByTestId('search-input')
        await user.type(searchInput, 'name');
        expect(searchInput).toHaveValue('name');

        const setButton = screen.getByRole("button",{
            name:"Search"
        })
        await user.click(setButton);
        setTimeout(()=> {expect(onSearch).toHaveBeenCalledTimes(1);
        }, 2000);

    })
});