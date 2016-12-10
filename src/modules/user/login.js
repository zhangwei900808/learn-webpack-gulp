
require('../../css/user.css');
import { UserLogin, TeacherLogin } from 'awbeci'


let React = require('react');
let ReactDOM = require('react-dom');
require('../../sass/index.scss');
$(function () {
    class App extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            if (window.location.hash == "#react") {
                return <UserLogin/>
            }
            alert(window.location.hash)
            return <TeacherLogin/>
        }
    }

    ReactDOM.render(<App />, document.getElementById('root'))
})
