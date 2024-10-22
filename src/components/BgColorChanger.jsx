import React from 'react';
import { useState } from 'react';

const BgColorChanger = () => {

    const [color, setColor] = useState("pink");
    const blueClick = () => {
        setColor("blue")
    }
    const yellowClick = () => {
        setColor("yellow")
    }
    const purpleClick = () => {
        setColor("purple")
    }
    function greenClick() {
        setColor("green")
    }
    function blackClick() {
        setColor("black")
    }
    function skyClick() {
        setColor("#082f49")
    }
    function roseClick() {
        setColor("#881337")
    }
    const orangeClick = () => {
        setColor("#ea580c")
    }
    function stoneClick(){
        setColor("#44403c")
    }
    const grayClick = () =>{
        setColor("#374151")
    }
    function neutralClick(){
        setColor("#262626")
    }

    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "red" }}>Red
                        </button>

                        <button onClick={blueClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "blue" }}>Blue
                        </button>

                        <button onClick={yellowClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "yellow" }}>Yellow
                        </button>

                        <button onClick={purpleClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "purple" }}>Purple
                        </button>

                        <button onClick={greenClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "green" }}>Green
                        </button>

                        <button onClick={blackClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "black" }}>Black
                        </button>

                        <button onClick={skyClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#082f49" }}>SKY
                        </button>

                        <button onClick={roseClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#881337" }}>Rose
                        </button>

                        <button onClick={orangeClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#ea580c" }}>Orange
                        </button>

                        <button onClick={stoneClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#44403c" }}>Stone
                        </button>

                        <button onClick={grayClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#374151" }}>Gray
                        </button>

                        <button onClick={neutralClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "#262626" }}>Neutral
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}
export default BgColorChanger;
