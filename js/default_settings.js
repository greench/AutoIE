
// Initialize a storage object with all our settings and their default values.
// The default values only need to be set when initializing for the background
// script (so settings can be initialized on the first run) and for the options
// page (so settings can be reset to their default values).

// There is another optional argument which can be filled with configuration 
// options. For example, you can store settings in localStorage instead of
// widget.preferences. See the documentation for more details.

var storage = new SettingStorage([
	['transform', 'meb.gov.tr']
]);

// For pages that do not need default values, you can initialize like this:
// var storage = new SettingStorage()