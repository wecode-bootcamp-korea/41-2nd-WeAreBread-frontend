const BASE_URL = 'http://138.2.112.49:3000';

/**
 *
 * @param {string} url
 * @param {'GET'|'POST'|'DELETE'|'PUT'|'PATCH'} method
 * @param {object} data
 * @returns {Promise}
 */
export const fetchInstance = async (url = '', method, data = {}) => {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: localStorage.getItem('accessToken'),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: method === 'GET' ? null : JSON.stringify(data),
  });
  return response.json();
};
