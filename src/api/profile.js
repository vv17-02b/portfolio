// src/api/profile.js
export const getProfile = async () => {
    const token = localStorage.getItem('token');

    const res = await fetch('/profile', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error('Не авторизовано');
    }

    return res.json();
};
