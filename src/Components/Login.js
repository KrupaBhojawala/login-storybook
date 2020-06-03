import React from 'react';
// import PropTypes from 'prop-types';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            staffId : this.props.login.staffId,
            password : this.props.login.password,
            state : this.props.login.state,
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { staffId, password } = this.state;

        if(staffId && password){
            if(staffId === "admin" && password === "admin123"){
                console.log("Success");
                this.setState({ 
                    state: 'LOGIN_SUCCESS'
                });
            }
            else{
                console.log("Fail");
                this.setState({ 
                    state: 'LOGIN_FAIL'
                });
            }
        }
    }

    render(){
        const { staffId, password, state, submitted } = this.state;
        return(<>
            {state == "LOGIN_SUCCESS"?(
                <div style={{color:'green', textAlign:'center'}} >
                    Login Sucessfull
                </div>
            ):[(state == "LOGIN_FAIL"?(
                <div style={{color:'red', textAlign:'center'}} >
                    Invalid Username and Password!!
                </div>):null
            ),(
                <div className="col-md-6 col-md-offset-3" style={{color:'white', textAlign:'center'}} >
                <h2>Login</h2>
                <form name="form" className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !staffId ? ' has-error' : '')}>
                        <label htmlFor="staffId" className="control-label col-sm-3" >Username</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="staffId" value={staffId} onChange={this.handleChange} />
                            {submitted && !staffId &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password" className="control-label col-sm-3" >Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            )]}
            </>
        )
    }
}

// Login.prototype = {
//     login: PropTypes.shape({
//         username: PropTypes.string.isRequired, 
//         password:PropTypes.string.isRequired, 
//         state:PropTypes.string.isRequired
//     }) 
// }

export default Login;