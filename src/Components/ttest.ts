import { stringify } from "querystring"
import TsTest from "./TsTest";

function Clone<T>(value:T) :T
{
    let r = JSON.stringify(value);
    return JSON.parse(r);
}

Clone<string>("aaaa");

export {}