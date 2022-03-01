import {getByTestId, render, screen} from '@testing-library/react';

import  CharacterCard from './CharacterCard';

test('Komponente korrekt', () => {
    // given


// when
   render(<CharacterCard id = {4711} name='Rick' image=' ' location={{name: 'XX'}} status='Alive' species='human' gender='Male' />);

    // then
    expect(screen.getByTestId('the-name').textContent).toEqual('Rick');
    const imageTag = screen.getByTestId('character-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('http://localhost/');

}
)