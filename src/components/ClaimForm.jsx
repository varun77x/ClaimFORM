import React, { useState } from "react";
import "../styles/ClaimForm.css";
import logo from "../assets/xangam.png";

const ClaimForm = () => {
  const [claimType, setClaimType] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [consent, setConsent] = useState(false);
  const [response, setResponse] = useState("");
  const [dynamicFields, setDynamicFields] = useState({});

  const clearDynamicFields = (type) => {
    const fieldsByType = {
      health: { hospitalName: "", admissionDate: "", dischargeDate: "" },
      motor: { vehicleNumber: "", accidentDate: "" },
      life: { nomineeName: "", deathDate: "", causeOfDeath: "" },
      travel: { destination: "", travelStart: "", incident: "" },
      home: { address: "", damage: "" },
      personal: { injuryType: "", incidentDate: "" },
    };
    return fieldsByType[type] || {};
  };

  const handleClaimTypeChange = (e) => {
    const newType = e.target.value;
    setClaimType(newType);
    setDynamicFields(clearDynamicFields(newType));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (aadhaar.length !== 12 || !consent) {
      setResponse("Please enter a valid Aadhaar and provide consent.");
      return;
    }

    const isSuccess = Math.random() > 0.3;
    if (isSuccess) {
      window.location.href = "https://xangarsinfra.com/verify-success";
    } else {
      setResponse("❌ Authentication failed. Please try alternate verification.");
    }
  };

  const renderClaimFields = () => {
    switch (claimType) {
      case "health":
        return (
          <>
            <SectionTitle title="Health Insurance Details" />
            <Input
              placeholder="Hospital Name"
              value={dynamicFields.hospitalName || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, hospitalName: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Admission Date"
              value={dynamicFields.admissionDate || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, admissionDate: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Discharge Date"
              value={dynamicFields.dischargeDate || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, dischargeDate: e.target.value })
              }
            />
          </>
        );
      case "motor":
        return (
          <>
            <SectionTitle title="Motor Insurance Details" />
            <Input
              placeholder="Vehicle Number"
              value={dynamicFields.vehicleNumber || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, vehicleNumber: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Accident Date"
              value={dynamicFields.accidentDate || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, accidentDate: e.target.value })
              }
            />
          </>
        );
      case "life":
        return (
          <>
            <SectionTitle title="Life Insurance Details" />
            <Input
              placeholder="Nominee Name"
              value={dynamicFields.nomineeName || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, nomineeName: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Date of Death"
              value={dynamicFields.deathDate || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, deathDate: e.target.value })
              }
            />
            <Input
              placeholder="Cause of Death"
              value={dynamicFields.causeOfDeath || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, causeOfDeath: e.target.value })
              }
            />
          </>
        );
      case "travel":
        return (
          <>
            <SectionTitle title="Travel Insurance Details" />
            <Input
              placeholder="Destination Country"
              value={dynamicFields.destination || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, destination: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Travel Start Date"
              value={dynamicFields.travelStart || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, travelStart: e.target.value })
              }
            />
            <Input
              placeholder="Incident Description"
              value={dynamicFields.incident || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, incident: e.target.value })
              }
            />
          </>
        );
      case "home":
        return (
          <>
            <SectionTitle title="Home Insurance Details" />
            <Input
              placeholder="Property Address"
              value={dynamicFields.address || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, address: e.target.value })
              }
            />
            <Input
              placeholder="Type of Damage"
              value={dynamicFields.damage || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, damage: e.target.value })
              }
            />
          </>
        );
      case "personal":
        return (
          <>
            <SectionTitle title="Personal Accident Details" />
            <Input
              placeholder="Injury Type"
              value={dynamicFields.injuryType || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, injuryType: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Incident Date"
              value={dynamicFields.incidentDate || ""}
              onChange={(e) =>
                setDynamicFields({ ...dynamicFields, incidentDate: e.target.value })
              }
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <img src={logo} alt="Xangars Logo" style={{backgroundColor:"red"}} className="form-logo"></img>
        <h2 className="form-title"><u>Insurance Claim Verification</u></h2>
        <form onSubmit={handleSubmit}>
          <SectionTitle title="Insurer & Policy Details" />

          <div className="form-group">
            <label>Insurance Provider</label>
            <select required>
              <option value="">Select Insurer</option>
              {[
                "LIC", "HDFC ERGO", "ICICI Lombard", "New India Assurance",
                "United India Insurance", "Reliance General", "Bajaj Allianz",
                "Star Health", "Tata AIG", "Oriental Insurance",
              ].map((ins) => (
                <option key={ins}>{ins}</option>
              ))}
            </select>
          </div>

          <Input label="Policy Number" required />

          <div className="form-group">
            <label>Claim Type</label>
            <select value={claimType} onChange={handleClaimTypeChange} required>
              <option value="">Select Type</option>
              <option value="health">Health Insurance</option>
              <option value="motor">Motor Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="travel">Travel Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="personal">Personal Accident</option>
            </select>
          </div>

          {renderClaimFields()}

          <SectionTitle title="Identity Verification" />
          <Input
            label="Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            maxLength={12}
            placeholder="Enter 12-digit Aadhaar"
            required
          />

          <div className="form-group">
            <label>Authentication Type</label>
            <select required>
              <option value="otp">OTP</option>
              <option value="biometric">Biometric</option>
            </select>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <label htmlFor="consent" style={{ color: "#34495e" }}>I consent to Aadhaar-based authentication.</label>
          </div>

          <button type="submit" className="submit-btn">
            Submit for Verification
          </button>

          {response && <div className="form-response">{response}</div>}
        </form>
      </div>
    </div>
  );
};

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  required = false,
}) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
    />
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="section-title">{title}</h3>
);

export default ClaimForm;
