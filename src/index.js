import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'cdfortes/team-members', {
	edit: Edit,
	save,
} );
