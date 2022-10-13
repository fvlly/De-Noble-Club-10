import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe,it,expect} from 'vitest'
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe('app',()=>{
    it('should contain hero text',()=>{
        render(<App />)

        expect(screen.getByRole('heading',{name: /promoting peace and ,/i})).toBeInTheDocument()
        
    })

    it('should navigate to about page',async ()=>{
        const user = userEvent.setup()
        render(<App />)

        const link = screen.getByRole('link',{name:/about/i})
        user.click(link)

        expect(await screen.findByRole('heading',{name: /about/i})).toBeInTheDocument()

    }) 
})
