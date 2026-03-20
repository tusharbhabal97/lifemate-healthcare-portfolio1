const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api';

const parseResponse = async (response) => {
  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }

  if (!response.ok) {
    throw new Error(payload.message || 'Something went wrong. Please try again.');
  }

  return payload;
};

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return parseResponse(response);
};

export const submitCareerApplication = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/careers`, {
    method: 'POST',
    body: formData,
  });

  return parseResponse(response);
};
