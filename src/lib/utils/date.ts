export const formatDate = (date_de_peremption: string) => {
	const date = new Date(date_de_peremption);
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString();
	return `${day}/${month}/${year}`;
};

export const isFutureDate = (date_de_peremption: string) => {
	const date = new Date(date_de_peremption);
	const now = new Date(currentDate());
	return date >= now;
};

const currentDate = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};
