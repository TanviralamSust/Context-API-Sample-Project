import {rest} from "msw";

export const handlers = [
    rest.get('http://localhost:3009/api/v1/funds',(req, res, ctx)=> {
        return res(
            ctx.status(200),
            ctx.json([

                {exchange : "NASDAQ", id : "55e499qwqc8-709e-4f23-b6e5-d908e4e348a1", name : "O Kon, Schimmel and Moen International Fund",  ticker : "ASXB"},

                {exchange : "NASDAQ", id : "55e4qqq99c8-709e-4f23-b6e5-d908e4e348a1", name : "O Kon, Schimmel and Moen International Fund",  ticker : "ASXB"},

                {exchange : "NASDAQ", id : "55e49ww9c8-709e-4f23-b6e5-d908e4e348a1", name : "O Kon, Schimmel and Moen International Fund",  ticker : "ASXB"}
            ])
        )
    })
]
