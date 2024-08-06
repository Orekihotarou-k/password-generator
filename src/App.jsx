import { useState } from "react";

export default function App() {
  // handle range slider
  const [length, setLength] = useState(12);

  // handle state when slider is being moved
  const handleSliderChange = (e) => {
    setLength(Number(e.target.value));
  };

  // state management for password generation
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  // character sets
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-[]{}|;:,.<>?";

  // function to implement password generation
  const generatePassword = () => {
    let characterSet = "";

    // append character sets based on selected toggle
    if (uppercase) characterSet += uppercaseLetters;
    if (lowercase) characterSet += lowercaseLetters;
    if (number) characterSet += numbers;
    if (symbol) characterSet += symbols;

    if (characterSet === "") {
      alert("You must select at least one option");
      return;
    }

    // generate password function
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      newPassword += characterSet[randomIndex];
    }

    setPassword(newPassword);
  };

  // function to copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied"))
      .catch(() => alert("Failed to copy password"));
  };

  return (
    <main className="bg-light-lavender w-full h-dvh grid place-items-center">
      <div className="bg-midnight-purple rounded-2xl px-4 py-6 w-[23rem]">
        <h1 className="text-white font-semibold text-xl mb-6">Generate Password</h1>

        <label
          htmlFor="generatedPassword"
          className="text-lavender-mist text-[12px]"
        >
          GENERATED PASSWORD
        </label>

        <div className="relative">
          <input
            type="text"
            id="generatedPassword"
            readOnly
            value={password}
            className="bg-light-purple rounded-[.8rem] px-4 py-2 text-lavender-mist text-xl w-full mt-2 outline-none"
          />

          <button
            className="absolute top-5 right-10 cursor-pointer"
            onClick={copyToClipboard}
          >
            <img src="copy.png" width={22} alt="" />
          </button>

          <button
            className="absolute top-5 right-2 cursor-pointer"
            onClick={generatePassword}
          >
            <img src="sync.png" width={22} alt="" />
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="characterLength"
              className="text-lavender-mist text-[12px] mt-6"
            >
              CHARACTER LENGTH
            </label>
            <p className="text-lavender-mist text-[12px]">{length}</p>
          </div>

          <input
            type="range"
            id="characterLength"
            min="12"
            max="32"
            value={length}
            onChange={handleSliderChange}
            className="text-xl w-full mt-1"
          />
        </div>

        <div>
          <h2 className="text-lavender-mist text-[12px] mt-6">SETTINGS</h2>

          <div className="bg-light-purple rounded-[.8rem] px-4 py-2 text-lavender-mist text-xl w-full mt-2">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setUppercase(!uppercase)}
            >
              <p className="text-sm">Include uppercase letters</p>

              <div
                className={`relative w-10 h-6 rounded-full ${
                  uppercase ? "bg-[#c074e1]" : "bg-[#6c2eb9]"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full translate-y-1 top-1 transition-transform ease-in-out ${
                    uppercase ? "translate-x-5" : "translate-x-1"
                  }`}
                ></div>
              </div>
            </button>
          </div>

          <div className="bg-light-purple rounded-[.8rem] px-4 py-2 text-lavender-mist text-xl w-full mt-2">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setLowercase(!lowercase)}
            >
              <p className="text-sm">Include lowercase letters</p>

              <div
                className={`relative w-10 h-6 rounded-full ${
                  lowercase ? "bg-[#c074e1]" : "bg-[#6c2eb9]"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full translate-y-1 top-1 transition-transform ease-in-out ${
                    lowercase ? "translate-x-5" : "translate-x-1"
                  }`}
                ></div>
              </div>
            </button>
          </div>

          <div className="bg-light-purple rounded-[.8rem] px-4 py-2 text-lavender-mist text-xl w-full mt-2">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setNumber(!number)}
            >
              <p className="text-sm">Include numbers</p>

              <div
                className={`relative w-10 h-6 rounded-full ${
                  number ? "bg-[#c074e1]" : "bg-[#6c2eb9]"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full translate-y-1 top-1 transition-transform ease-in-out ${
                    number ? "translate-x-5" : "translate-x-1"
                  }`}
                ></div>
              </div>
            </button>
          </div>

          <div className="bg-light-purple rounded-[.8rem] px-4 py-2 text-lavender-mist text-xl w-full mt-2">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setSymbol(!symbol)}
            >
              <p className="text-sm">Include symbols</p>

              <div
                className={`relative w-10 h-6 rounded-full ${
                  symbol ? "bg-[#c074e1]" : "bg-[#6c2eb9]"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full translate-y-1 top-1 transition-transform ease-in-out ${
                    symbol ? "translate-x-5" : "translate-x-1"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        <button
          className="text-white bg-[#c074e1] w-full p-2 mt-8 rounded-md font-semibold"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </main>
  );
}
