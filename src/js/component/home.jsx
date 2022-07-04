import React, {useState, useEffect,useRef} from "react";
import { render } from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Clock = () => {

const [seconds,setSeconds] = useState(0);
const [hora,setHora] = useState(0);
const [minutes,setMinutes] = useState(0);
const [ampm,setAmpm] = useState("");
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

if(h > 12){
    h = h - 12;
}
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;


useEffect(() => {
    const interval = setInterval(() => {
        setHora(h);
        setMinutes(m);
        setSeconds(s);
        setAmpm(am)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

	return (
		
        <div id="time">
            <div class="circle" id="red">
               <div class="dots hr_dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="hh" ></circle>
                </svg>
                <div>{hora}<br/><span>Hora</span></div>
            </div>
            <div class="circle" id="green">
                <div class="dots min_dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="mm" ></circle>
                </svg>
                
                <div id="minutes">{minutes}<br/><span>minutos</span></div>
            </div>
            <div class="circle" id="yellow">
                <div class="dots sec_dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="ss" ></circle>
                </svg>
                <div id="seconds">{seconds}<br/><span>segundos</span></div>
            </div>
            <div class="ap">
                <div id="ampm">{ampm}</div>
            </div>
		</div>
	);
};


export default Clock;
