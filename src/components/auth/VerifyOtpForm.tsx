import { useRef, useState } from "react";
import { SuccessToast } from "../../helper/ValidationHelper";

const VerifyOtpForm = () => {
  const [code, setCode] = useState<string[]>(new Array(5).fill(''));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const isLoading = false;
  const isDisabled = code.find((cv)=>cv=="") == ""; //check if any code is empty string




  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, '');
    const newCode = [...code];

    if (value) {
      newCode[index] = value;
      setCode(newCode);

      if (index < 4 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
      if (code[index]) {
        // Clear current value
        newCode[index] = '';
        setCode(newCode);
      } else if (index > 0) {
        // Move to previous input
        inputRefs.current[index - 1]?.focus();
        const updatedCode = [...code];
        updatedCode[index - 1] = '';
        setCode(updatedCode);
      }
    }
  };


 
  const handleVerify = () => {
    console.log(code);
    const otp = code.join('');
    SuccessToast("Verify Success")
  }


  return (
    <>
      {/* Code Inputs */}
      <div className="flex justify-center gap-3 mb-6">
        {code.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => {
                inputRefs.current[idx] = el;
            }}
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={isDisabled || isLoading}
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mb-4 disabled:cursor-not-allowed"
      >
        {
            isLoading ? "Verifying..." : "Verify"
        }
      </button>

      {/* Resend */}
      <p className="text-sm text-gray-500">
        You have not received the email?{" "}
        <button className="text-black font-medium hover:underline">
          Resend
        </button>
      </p>
    </>
  );
};

export default VerifyOtpForm;
