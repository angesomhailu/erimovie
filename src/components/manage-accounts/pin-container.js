"use client";
import { useRef } from "react";

export default function PinContainer({
  showPinContainer,
  pinError,
  setShowPinContainer,
  handlePinSubmit,
  setPinError,
  pin,
  setPin,
}) {
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    const newPin = pin.split("");
    newPin[index] = value;
    setPin(newPin.join(""));

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Auto-submit if complete
    if (newPin.join("").length === 6) {
      handlePinSubmit(newPin.join(""), index);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    showPinContainer && (
      <div className="z-[100] bg-[#141414] flex-col min-h-screen absolute left-0 top-0 justify-center flex items-center right-0">
        <span
          onClick={() => {
            setShowPinContainer({ ...showPinContainer, show: false });
            setPin("");
            setPinError(false);
          }}
          className="cursor-pointer absolute top-[50px] right-[40px] text-white text-2xl"
        >
          ✕
        </span>

        <h1 className="text-gray-400 font-bold text-[16px] mb-4">
          Profile Lock is currently ON
        </h1>

        <h2
          className={`font-bold text-[30px] ${
            pinError ? "text-[#e6b209]" : "text-white"
          }`}
        >
          {pinError
            ? "You entered wrong password,Please try again! "
            : "Enter your Password to access this profile"}
        </h2>

        <div className="flex gap-4 mt-6">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="password"
              maxLength={1}
              className="w-[60px] h-[70px] text-center text-white text-3xl bg-transparent border border-white rounded"
              value={pin[index] || ""}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              inputMode="numeric"
              autoComplete="off"
            />
          ))}
        </div>
      </div>
    )
  );
}
