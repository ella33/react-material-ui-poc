import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { styled } from '@material-ui/core/styles';

export const SbyFormFieldGroup = styled(FormControlLabel)(({ required }) => {
	return {
		marginBottom: 16,
		'& .MuiOutlinedInput-root': {
			width: '100%',
		},
		'& > .MuiFormControlLabel-label': {
			position: 'relative',
			width: 240,
			'&:before': {
				alignItems: 'center',
				color: '#D12436',
				content: '\'\\2605\'',
				display: 'inline-flex',
				fontSize: 10,
				height: '100%',
				left: -15,
				position: 'absolute',
				top: 0,
				width: 10,
				opacity: required ? 1 : 0,
			},
		}
	};
});

export const SbyRadioGroup = styled(RadioGroup)({
	flexDirection: 'row',
});