import React from "react";
import {render, screen, act} from "@testing-library/react"
import {FundingProvider} from "../../context/FundingContext";
import Home from "../Home";


describe('test home component', () => {
    test('datagrid component is displayed', async ()=> {
        await act( () => {
            render(<Home/>, {
                wrapper: FundingProvider
            })
        });


        const loadingDiv = screen.getByTestId('my-test')
        expect(loadingDiv).toBeInTheDocument()
    })
});