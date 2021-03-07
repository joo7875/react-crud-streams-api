// Object-based approach
const streamReducer = (state={}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            // const newState = { ...state };
            // newState[action.payload.id] = action.payload;
            // return newState;

            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};

const animalSounds = { cat: 'meow', dog: 'bark' };
const animal = 'lion';
const sound = 'roar';

{ ...animalSounds, [animal]: sound };