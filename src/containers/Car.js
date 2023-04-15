import { connect } from 'react-redux'
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)

//Steps
    //1. Import connect
    //2. Import the dumb component
    //3. Define mapStateToProps with state as param
    //4. return object with key equal to state variable that im targeting

