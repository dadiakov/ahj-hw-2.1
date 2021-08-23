import addTable from "./addTable";
import addPic from "./addpic";

const size = 4;
const timeout = 1000;

addTable(size);
setInterval(()=> addPic(4), timeout);