import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';

import Dot from '../components/Dot';
import Bar from '../components/Bar';
import Box from '../components/Box';
import GridBlock from '../components/GridBlock';
import GameContainer from '../containers/GameContainer';

//---------------------------------------------------------------------------//

storiesOf('Dot', module).add('default', () => <Dot />);

//---------------------------------------------------------------------------//

const storiesOfBar = storiesOf('Bar', module);
storiesOfBar.addDecorator(withKnobs);
storiesOfBar.add('default', () => {
	const typeLabel = 'Type';
	const typeOptions = {
		0: 0,
		1: 1,
		2: 2,
		null: null,
	};
	const typeDefaultValue = 0;
	const typeValue = select(typeLabel, typeOptions, typeDefaultValue);

	const orientationLabel = 'Orientation';
	const orientationOptions = {
		horizontal: 'horizontal',
		vertical: 'vertical',
	};
	const orientationDefaultValue = 'vertical';
	const orientationValue = select(orientationLabel, orientationOptions, orientationDefaultValue);
	return <Bar type={typeValue} orientation={orientationValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfBox = storiesOf('Box', module);
storiesOfBox.addDecorator(withKnobs);
storiesOfBox.add('default', () => {
	const typeLabel = 'Type';
	const typeOptions = {
		0: 0,
		1: 1,
		2: 2,
		null: null,
	};
	const typeDefaultValue = 0;
	const typeValue = select(typeLabel, typeOptions, typeDefaultValue);

	const textLabel = 'Text';
	const textDefaultValue = 'P1';
	const textValue = text(textLabel, textDefaultValue);
	return <Box type={typeValue} text={textValue} />;
});

//---------------------------------------------------------------------------//

const storiesOfGridBlock = storiesOf('GridBlock', module);
storiesOfGridBlock.addDecorator(withKnobs);
storiesOfGridBlock.add('default', () => {
	const typeOptions = {
		0: 0,
		1: 1,
		2: 2,
		null: null,
	};

	const block = {
		top: select('top', typeOptions, 1),
		left: select('left', typeOptions, 1),
		completedBy: select('completedBy', typeOptions, 1),
	};
	return <GridBlock block={block} dispatch={() => {}} />;
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
