"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [bye, setBye] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!error && count < 100) {
        setCount(count + 10);
        if (count === 50) {
          clearInterval(interval);
          setError(true);
        }
      }

      if (!error && count === 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, error]);

  const handleContinue = () => {
    if (error) {
      setError(false);
      setLoading(true);
      setCount((prevCount) => prevCount + 10);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl mb-4 text-white">{!loading && !error && "Ну всо ты меня супер любыш)"}</h1>
      {loading ? (
        <div className="text-4xl mb-4">
          {error && (
            <div style={{ gap: "20px" }} className="flex flex-col">
              <p className="text-white">Ошибка&#128532;</p>
              <button
                style={{
                  background: "pink",
                  padding: "20px",
                  borderRadius: "9999px",
                }}
                className="text-white rounded-full"
                onClick={handleContinue}
              >
                ДОБАВИТЬ БОЛЬШЕ ЛЮБВЫ!!!!!!!!!!!!!
              </button>
              <button
                style={{
                  background: "#c45353",
                  padding: "20px",
                  borderRadius: "9999px",
                  position: "relative",
                  left: bye ? "2400px" : "0px",
                  transition:  "all 1s",
                }}
                className={`text-white`}
                onClick={() => {
                  setBye(true);
                }}
              >
                Не добавлять любвы(
              </button>
            </div>
          )}
          {!error && <p className="text-4xl text-white">{`${count}% Загрузка...`}</p>}
        </div>
      ) : (
        <Image src="https://ggaabriel.github.io/valentines-day/kittyDance.gif" alt="kitty" width={400} height={400} priority={true}/>
      )}
    </div>
  );
};

export default LoadingComponent;
