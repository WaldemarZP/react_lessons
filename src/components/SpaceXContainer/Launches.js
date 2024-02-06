import {useEffect, useState} from "react";
import {launchService} from "../../services/launchService";
import {Launch} from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchService.getAll().then(({data})=> {
            const filtered = data.filter(item=>item.launche_year !== '2020');
            setLaunches(filtered)
        })
    }, []);

    return (
        <div>
            {launches.map(launch=><Launch key={launch.launche_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};