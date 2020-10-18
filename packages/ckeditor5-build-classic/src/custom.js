import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import ClassicEditor from './ckeditor';

ClassicEditor.builtinPlugins.push( Alignment );

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'underline',
			'italic',
			'highlight',
			'link',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// TODO Ja only
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

