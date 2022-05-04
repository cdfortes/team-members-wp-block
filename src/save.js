import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Boilerplate – hello from the saved content!',
				'boilerplate'
			) }
			<InnerBlocks.Content />
		</p>
	);
}
