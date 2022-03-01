import {fireEvent, waitFor, render, screen} from '@testing-library/react';
import Gallery from "./Components/Gallery";


test('Mocken von http hat geklappt', async() =>{
    jest.spyOn(global,'fetch').mockImplementation(()=> {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                info: {},
                results: [
                    {
                        id: 1,
                        name: 'Rick',
                        image: "http:url",
                        location: '',
                        status: 'alive',
                        species: 'Human',
                        gender: 'Male'
                    },
                    {
                        id: 2,
                        name: 'Morty',
                        image: "http:url",
                        location: '',
                        status: 'alive',
                        species: 'Human',
                        gender: 'Male'
                    },
                    {
                        id: 3,
                        name: 'Paul',
                        image: "http:url",
                        location: '',
                        status: 'alive',
                        species: 'Human',
                        gender: 'Male'
                    }]
            })
        } as Response);

        });
        render(<Gallery/>);

        await waitFor(()=>{
            expect(screen.getAllByTestId('gallery-item').length).toBe(3);
        });

        const searchField = screen.getByTestId('search-field') as HTMLInputElement;
        fireEvent.change(searchField, {target: {value: 'r'}});

        await waitFor(() => {
            expect(screen.getAllByTestId('gallery-item').length).toBe(2);
        });

});
