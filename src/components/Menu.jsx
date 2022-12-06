import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";
import Switch from "./Switch";
import { useState } from "react";

export default function Menu()
{
    const [page, setPage] = useState(1);

    const menu = tab => <div>
        {tab}
        <Switch page={page} setPage={setPage} />
    </div>;

    switch (page)
    {
        case 1:
            return menu(<One page={page} setPage={setPage} />);
            break;
        case 2:
            return menu(<Two/>);
            break;
        case 3:
            return menu(<Three/>);
            break;
        case 4:
            return menu(<Four/>);
            break;
        case 5:
            return <Five/>;
            break;
    }
}