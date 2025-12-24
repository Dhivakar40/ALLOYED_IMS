import { useState, useEffect, useRef } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export function useScramble(text, speed = 40) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef(null);

    const startScramble = () => {
        setIsScrambling(true);
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
                setIsScrambling(false);
            }

            iteration += 1 / 2; // Slower resolve
        }, speed);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return { displayText, startScramble, stopScramble, isScrambling };
}
