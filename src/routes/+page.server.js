let year = 2022;
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		year=formData.get("year");
	}
};

export async function load({fetch}) {
    try {
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