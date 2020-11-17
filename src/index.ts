import { parse } from "~src/parser";

parse()
    .then(() => console.log("Done"))
    .catch(console.error);
