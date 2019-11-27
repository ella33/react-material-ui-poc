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
			width: 240,
		},
	};
});

export const SbyRadioGroup = styled(RadioGroup)({
	flexDirection: 'row',
});