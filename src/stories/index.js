import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, color, text, number, select } from '@storybook/addon-knobs';

import Dot from '../components/Dot';
import Bar from '../components/Bar';
import Box from '../components/Box';
import Grid from '../components/Grid';
import GameContainer from '../containers/GameContainer';

//---------------------------------------------------------------------------//

storiesOf('Dot', module).add('default', () => <Dot />);

//---------------------------------------------------------------------------//

const storiesOfBar = storiesOf('Bar', module);
storiesOfBar.addDecorator(withKnobs);
storiesOfBar.add('default', () => {
	const label = 'Color';
	const defaultValue = 'tomato';
	const colorValue = color(label, defaultValue);

	const typeLabel = 'Type';
	const typeOptions = {
		horizontal: 'horizontal',
		vertical: 'vertical',
	};
	const typeDefaultValue = 'vertical';
	const typeValue = select(typeLabel, typeOptions, typeDefaultValue);
	return <Bar color={colorValue} type={typeValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfBox = storiesOf('Box', module);
storiesOfBox.addDecorator(withKnobs);
storiesOfBox.add('default', () => {
	const colorLabel = 'Color';
	const colorDefaultValue = 'tomato';
	const colorValue = color(colorLabel, colorDefaultValue);

	const textLabel = 'Text';
	const textDefaultValue = 'P1';
	const textValue = text(textLabel, textDefaultValue);
	return <Box color={colorValue} text={textValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfGrid = storiesOf('Grid', module);
storiesOfGrid.addDecorator(withKnobs);
storiesOfGrid.add('default', () => {
	const rowLabel = 'Rows';
	const defaultRowValue = 3;
	const rowValue = number(rowLabel, defaultRowValue);

	const colLabel = 'Columns';
	const defaultColValue = 3;
	const colValue = number(colLabel, defaultColValue);
	return <Grid rows={rowValue} column={colValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfGameContainer = storiesOf('GameContainer', module);
storiesOfGameContainer.addDecorator(withKnobs);
storiesOfGameContainer.add('default', () => {
	const rowLabel = 'Rows';
	const defaultRowValue = 3;
	const rowValue = number(rowLabel, defaultRowValue);

	const colLabel = 'Columns';
	const defaultColValue = 3;
	const colValue = number(colLabel, defaultColValue);
	return <GameContainer rows={rowValue} column={colValue} />;
});

//---------------------------------------------------------------------------//
