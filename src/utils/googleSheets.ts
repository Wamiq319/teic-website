interface GoogleSheetsSubmitResponse {
  success: boolean;
  message?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  type: "contact_form";
}

interface EmailSignupData {
  email: string;
  type: "email_signup";
}

type SubmitData = ContactFormData | EmailSignupData;

export const submitToGoogleSheets = async (
  data: SubmitData
): Promise<GoogleSheetsSubmitResponse> => {
  const APP_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!APP_SCRIPT_URL) {
    console.error("Google Script URL is not defined");
    return {
      success: false,
      message: "Server configuration error - missing script URL",
    };
  }

  try {
    const response = await fetch(APP_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: result.result === "success",
      message: result.message,
    };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return {
      success: false,
      message: "Failed to submit data. Please try again later.",
    };
  }
};
