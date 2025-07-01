import React, { useState } from "react";
import logo from "../assets/xangam.png"; // Adjust path as needed

const ClaimForm = () => {
  const [claimType, setClaimType] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [consent, setConsent] = useState(false);
  const [response, setResponse] = useState("");

  const renderDynamicFields = () => {
    switch (claimType) {
      case "health":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Health Insurance Details</h2>
            <input type="text" placeholder="Hospital Name" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Admission Date" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Discharge Date" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      case "motor":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Motor Insurance Details</h2>
            <input type="text" placeholder="Vehicle Number" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Accident Date" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      case "life":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Life Insurance Details</h2>
            <input type="text" placeholder="Nominee Name" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Date of Death" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="text" placeholder="Cause of Death" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      case "travel":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Travel Insurance Details</h2>
            <input type="text" placeholder="Destination Country" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Travel Start Date" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="text" placeholder="Incident Description" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      case "home":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Home Insurance Details</h2>
            <input type="text" placeholder="Property Address" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="text" placeholder="Type of Damage" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      case "personal":
        return (
          <>
            <h2 className="font-semibold mt-4 mb-2 text-gray-800">Personal Accident Details</h2>
            <input type="text" placeholder="Injury Type" className="w-full p-2 border border-gray-300 rounded mb-2" />
            <input type="date" placeholder="Incident Date" className="w-full p-2 border border-gray-300 rounded mb-2" />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("");

    if (aadhaar.length !== 12 || !consent) {
      setResponse("Please enter a valid Aadhaar and provide consent.");
      return;
    }

    const status = Math.random() > 0.3 ? "success" : "fail";
    if (status === "success") {
      window.location.href = "https://xangarsinfra.com/verify-success";
    } else {
      setResponse("❌ Authentication failed. Please try alternate verification.");
    }
  };

  return (
    <div className="bg-[#f0f4f8] min-h-screen py-8 px-4 font-mono">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <img src={logo} alt="Xangars Logo" className="bg-red-200 mx-auto mb-4 max-w-[150px]"></img>
        <h2 className="text-center text-xl font-bold text-gray-700 mb-6">Insurance Claim Verification</h2>

        <form onSubmit={handleSubmit}>
          <h3 className="font-semibold text-gray-800 mb-2">Insurer & Policy Details</h3>

          <select className="w-full p-2 border border-gray-300 rounded mb-2" required>
            <option value="">Select Insurer</option>
            {[
              "LIC", "HDFC ERGO", "ICICI Lombard", "New India Assurance",
              "United India Insurance", "Reliance General", "Bajaj Allianz",
              "Star Health", "Tata AIG", "Oriental Insurance"
            ].map((insurer) => (
              <option key={insurer}>{insurer}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Policy Number"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />

          <select
            value={claimType}
            onChange={(e) => setClaimType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          >
            <option value="">Select Type</option>
            <option value="health">Health Insurance</option>
            <option value="motor">Motor Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="travel">Travel Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="personal">Personal Accident</option>
          </select>

          {/* 🔑 KEY FIX HERE */}
          <div key={claimType}>
            {renderDynamicFields()}
          </div>

          <h3 className="font-semibold text-gray-800 mt-4 mb-2">Identity Verification</h3>

          <input
            type="text"
            placeholder="Enter 12-digit Aadhaar"
            maxLength={12}
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />

          <select className="w-full p-2 border border-gray-300 rounded mb-2" required>
            <option value="otp">OTP</option>
            <option value="biometric">Biometric</option>
          </select>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mr-2"
              required
            />
            <label>I consent to Aadhaar-based authentication.</label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c0392b] hover:bg-[#a93226] text-white py-2 rounded font-semibold"
          >
            Submit for Verification
          </button>
        </form>

        {response && (
          <div className={`text-center mt-4 font-bold ${response.includes("failed") ? "text-red-600" : "text-blue-600"}`}>
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimForm;
