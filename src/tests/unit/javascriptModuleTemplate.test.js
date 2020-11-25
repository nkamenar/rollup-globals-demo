import javascriptModuleTemplate from '../../js/index';

test('templateFunction returns true', () => {
	expect(javascriptModuleTemplate.templateFunction()).toBeTruthy();
});

test('templateFunction throws error if invalid', () => {
	expect(() => {
		javascriptModuleTemplate.templateFunction('invalid');
	}).toThrowError();
});
