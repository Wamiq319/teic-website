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

/**
 * Submits data to Google Sheets without CORS issues
 * @param data The data to submit
 * @returns Promise<boolean> - true if successful, false if failed
 */
export const submitToGoogleSheets = async (
  data: SubmitData
): Promise<boolean> => {
  const APP_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!APP_SCRIPT_URL) {
    console.error("Google Script URL is not defined");
    return false;
  }

  try {
    // Convert data to URLSearchParams format
    const formData = new URLSearchParams();

    // Add all properties from data to formData
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const response = await fetch(APP_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Critical for CORS
      },
      body: formData,
    });

    // For basic verification - check if response text contains "Success"
    const responseText = await response.text();
    console.log(responseText);
    return responseText.includes("Success");
  } catch (error) {
    console.error("Submission error:", error);
    return false;
  }
};
