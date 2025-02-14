import React, { useState } from "react";

// AES Key and IV from Mswipe
const MSWIPE_CONFIG = {
  AES_KEY: "cEHAzXt3uADsiPawZ78/Rw==",
  IV: "IFmkMH0LLw3NvR3H47yFKg==",
  CLIENT_ID: "MSW*PBLBri9401004085",
};

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentLink, setPaymentLink] = useState("");
  const [transactionId, setTransactionId] = useState("");

  // Function to encrypt payload (mock implementation - replace with actual AES GCM encryption)
  const encryptPayload = (payload: any) => {
    // In production, implement actual AES GCM encryption using the provided key and IV
    return btoa(JSON.stringify(payload));
  };

  // Function to decrypt response (mock implementation - replace with actual AES GCM decryption)
  const decryptResponse = (encrypted: any) => {
    // In production, implement actual AES GCM decryption using the provided key and IV
    return JSON.parse(atob(encrypted));
  };

  // const generateAuthToken = async () => {
  //   try {
  //     const payload = {
  //       applId: "api",
  //       channelId: "pbl",
  //       clientId: MSWIPE_CONFIG.CLIENT_ID,
  //       password:
  //         "0376e5f81ed306a952d53c3caf3f6c14a1d7d69dd2a3b1b6d7b45f32138e086c",
  //       userId: "7880001415",
  //     };

  //     const encryptedData = encryptPayload(payload);

  //     const response = await fetch(
  //       "https://dcuat.mswipetech.co.in/ipg/api/CreatePBLAuthEncToken",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "client-id": MSWIPE_CONFIG.CLIENT_ID,
  //           "x-signature": "aes",
  //         },
  //         body: JSON.stringify(encryptedData),
  //       }
  //     );

  //     const encryptedResponse = await response.text();
  //     const decryptedResponse = decryptResponse(encryptedResponse);

  //     return decryptedResponse.token;
  //   } catch (err) {
  //     throw new Error("Failed to generate auth token");
  //   }
  // };

  const generateAuthToken = async () => {
    try {
      const payload = {
        applId: "api",
        channelId: "pbl",
        clientId: MSWIPE_CONFIG.CLIENT_ID,
        password:
          "0376e5f81ed306a952d53c3caf3f6c14a1d7d69dd2a3b1b6d7b45f32138e086c",
        userId: "7880001415",
      };

      // Make the API request to your backend proxy server
      const response = await fetch(
        "https://brightlogistics.in/proxy/create-auth-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload), // Send payload to your backend
        }
      );

      const data = await response.json();
      return data.token; // Return the token
    } catch (err) {
      throw new Error("Failed to generate auth token");
    }
  };

  const createPaymentLink = async () => {
    setLoading(true);
    setError("");
    try {
      const token = await generateAuthToken();

      const payload = {
        amount: amount,
        ApplicationId: "api",
        ChannelId: "pbl",
        ClientId: MSWIPE_CONFIG.CLIENT_ID,
        email_id: email,
        mobileno: mobile,
        IsSendSMS: true,
        request_id: `req_${Date.now()}`,
        sessiontoken: token,
        user_id: "7709282861",
        versionno: "VER4.0.0",
      };

      const encryptedData = encryptPayload(payload);

      const response = await fetch(
        "https://dcuat.mswipetech.co.in/ipg/api/CreatePBLEncLink",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "client-id": MSWIPE_CONFIG.CLIENT_ID,
            "x-signature": "aes",
          },
          body: JSON.stringify(encryptedData),
        }
      );

      const encryptedResponse = await response.text();
      const decryptedResponse = decryptResponse(encryptedResponse);

      if (decryptedResponse.status === "True") {
        setPaymentLink(decryptedResponse.smslink);
        setTransactionId(decryptedResponse.txn_id);
      } else {
        throw new Error(
          decryptedResponse.responsemessage || "Failed to create payment link"
        );
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Mswipe Payment
      </h2>
      <div className="space-y-4">
        {/* Amount Input */}
        <div className="space-y-2">
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Mobile Input */}
        <div className="space-y-2">
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        {/* Generate Payment Link Button */}
        <button
          onClick={createPaymentLink}
          className={`w-full p-3 mt-4 text-white bg-blue-600 rounded-md ${
            loading || !amount || !email || !mobile
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          disabled={loading || !amount || !email || !mobile}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin w-5 h-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                ></path>
              </svg>
              Creating Payment Link...
            </span>
          ) : (
            "Generate Payment Link"
          )}
        </button>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">
            <p>{error}</p>
          </div>
        )}

        {/* Payment Link and Transaction ID */}
        {paymentLink && (
          <div className="mt-4 p-4 bg-gray-50 border rounded-md">
            <p className="text-sm font-medium">Payment Link:</p>
            <a
              href={paymentLink}
              className="text-blue-600 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {paymentLink}
            </a>
            <p className="text-sm mt-2">Transaction ID: {transactionId}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
