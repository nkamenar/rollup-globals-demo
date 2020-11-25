export const addMinExtension = (file) => {
	return [
		file.slice(0, file.lastIndexOf('.')),
		'.min',
		file.slice(file.lastIndexOf('.')),
	].join('');
};
