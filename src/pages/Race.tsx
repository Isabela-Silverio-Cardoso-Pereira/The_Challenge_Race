import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styled from "styled-components";

function Race() {
    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input?.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul?.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    return <>
        <motion.div>
            <div className="background">
                <nav>
                    <div className="navbar">
                        <div className="container nav-container">
                            <input className="checkbox" type={"checkbox"} />
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                            <div className="menu-items">
                                <li><Link to="/runners"><a href="#">Corredores</a></Link></li>
                                <li><Link to="/checkpoints"><a href="#">Pontos</a></Link></li>
                                <li><Link to="/challenges"><a href="#">Desafios</a></Link></li>
                            </div>
                        </div>
                    </div>
                </nav>


                <div className="homebg">
                    <div className="searchBoxP">
                        <input className="searchBox" onKeyUp={myFunction()} type="text" placeholder="Search.."></input>
                    </div>

                </div>
            </div>
        </motion.div>
    </>
}

export default Race