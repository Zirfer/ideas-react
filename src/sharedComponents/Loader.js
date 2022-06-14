import { useEffect } from "react";
import $ from 'jquery';
import "./Loader.css";

const Loader = () => {

    useEffect(() => {
        $('.loader-container').fadeOut(1000)
    }, [])

    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
};

export default Loader;
