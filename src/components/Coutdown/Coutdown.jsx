"use client"
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { YouTubePage } from "..";
import { FaLock } from "react-icons/fa";

// Componente de conclusão
const Completionist = () => {
    return (
        <span>
            <YouTubePage />
        </span>
    );
};

// Renderer callback com condição
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Renderiza um estado completo
        return <Completionist />;
    } else {
        return (
            <div className="relative w-full flex flex-row justify-center font-mono font-thin text-2xl gap-1 md:gap-5">
                
                <div className="flex flex-col items-center justify-center absolute w-full h-full bg-black/50">
                    <div className="flex flex-col items-center bg-sky-800/50 backdrop-blur-md py-10 px-40 rounded-3xl">
                        
                    <FaLock className=" text-5xl text-sky-500 mb-10" />
                        <div className="flex gap-10 ">
                            <div className="flex flex-col items-center justify-center rounded-lg">
                                <div>{days}</div>
                                <div className="text-xl font-sans font-light">Dias</div>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg">
                                <div>{hours}</div>
                                <div className="text-xl font-sans font-light">Horas</div>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg">
                                <div>{minutes}</div>
                                <div className="text-xl font-sans font-light">Min</div>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg">
                                <div>{seconds}</div>
                                <div className="text-xl font-sans font-light">Seg</div>
                            </div>
                        </div>
                    </div>
                </div>

                <img className="w-full h-auto" src="../../TN Youtube - Aula 3.png" />
            </div>
        );
    }
};

const CountdownComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const targetDate = new Date("2024-06-01T13:00:00");

    // Only render the Countdown component if the component is mounted
    return isMounted ? <Countdown date={targetDate} renderer={renderer} /> : null;
};

export default CountdownComponent;