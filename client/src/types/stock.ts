export type Market = "PRIME" | "STANDARD" | "GROWTH";

export interface Stock {
    id: number;
    ticker : string;
    name: string;
    exchangeMarket: Market;
    sharesIssued?: number;
    sector33Id?: number;
}