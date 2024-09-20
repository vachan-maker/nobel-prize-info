let year = 2018;
export async function load({fetch, params, url}) {
    try {
        year = url.searchParams.get('year');
        const response = await fetch(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`);
        if(!response.ok) {
            throw new Error('Response status: ${response.status}');
        }
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error.message);

    }
}