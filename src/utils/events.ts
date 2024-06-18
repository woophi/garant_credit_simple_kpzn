declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
export const sendDataToGA = async (creditSum: number) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbx0U5aarSNlEYrMPunCQOiSoChW-6eMFxRYgm-xdLTWMwb95segEDILP5kL5tANBSXFNQ/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, credit_sum: creditSum, variant: 'garant_credit_simple_kpzn' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
