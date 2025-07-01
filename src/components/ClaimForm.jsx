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

          <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
          <input type="text" placeholder="Enter hospital name" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Admission Date</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Discharge Date</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>
        </>
      );

    case "motor":
      return (
        <>
          <h2 className="font-semibold mt-4 mb-2 text-gray-800">Motor Insurance Details</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number</label>
          <input type="text" placeholder="Enter vehicle number" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Accident Date</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>
        </>
      );

    case "life":
      return (
        <>
          <h2 className="font-semibold mt-4 mb-2 text-gray-800">Life Insurance Details</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">Nominee Name</label>
          <input type="text" placeholder="Enter nominee name" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Death</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Cause of Death</label>
          <input type="text" placeholder="Enter cause of death" className="w-full p-2 border border-gray-300 rounded mb-2" />
        </>
      );

    case "travel":
      return (
        <>
          <h2 className="font-semibold mt-4 mb-2 text-gray-800">Travel Insurance Details</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
          <input type="text" placeholder="Enter country name" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Start Date</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">Incident Description</label>
          <input type="text" placeholder="Describe incident" className="w-full p-2 border border-gray-300 rounded mb-2" />
        </>
      );

    case "home":
      return (
        <>
          <h2 className="font-semibold mt-4 mb-2 text-gray-800">Home Insurance Details</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
          <input type="text" placeholder="Enter address" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Type of Damage</label>
          <input type="text" placeholder="Describe damage" className="w-full p-2 border border-gray-300 rounded mb-2" />
        </>
      );

    case "personal":
      return (
        <>
          <h2 className="font-semibold mt-4 mb-2 text-gray-800">Personal Accident Details</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">Injury Type</label>
          <input type="text" placeholder="Enter injury type" className="w-full p-2 border border-gray-300 rounded mb-2" />

          <label className="block text-sm font-medium text-gray-700 mb-1">Incident Date</label>
          <div className="relative mb-2">
            <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            {/* <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">📅</span> */}
          </div>
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
    setResponse("Authentication in progress...");

    // const status = Math.random() > 0.3 ? "success" : "fail";
    // if (status === "success") {
    //   window.location.href = "https://xangarsinfra.com/verify-success";
    // } else {
    //   setResponse("❌ Authentication failed. Please try alternate verification.");
    // }
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
