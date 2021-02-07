import React, {useSelector} from 'react-redux';

const Test = () => {
const {num} = useSelector(state => state.testReducer);
console.log(num)
    return (
        <div>test {num}</div>
    )
}

export default Test;