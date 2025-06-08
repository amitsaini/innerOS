const API_URL = 'http://localhost:5001/api/checkin';

export const createCheckin = async (checkinData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkinData),
    });
    if (!response.ok) {
      throw new Error('Failed to create checkin');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getCheckins = async () => {
  try {
    const response = await fetch(`${API_URL}?limit=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch checkins');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
