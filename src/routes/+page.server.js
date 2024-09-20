export async function load({fetch}) {
    try {
        const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=2023');
        if(!response.ok) {
            throw new Error('Response status: ${response.status}');
        }
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(error.message);

    }
}