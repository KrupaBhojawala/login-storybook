import React from 'react';
import PropTypes from 'prop-types';

function Login ({login: { username, password, state }}){
    switch (state) {
        case 'LOGIN_SUCCESS':
            return(
                <div style={{color:'green', textAlign:'center'}} >
                        Login Sucessfull
                </div>
            )
        
        case 'LOGIN_FAIL':
            return(<>
                <div style={{color:'red', textAlign:'center'}} >
                        Invalid Username and Password!!
                </div>
                <div className="col-md-6 col-md-offset-3" style={{color:'white', textAlign:'center'}} >
                <h2>Login</h2>
                <form name="form" className="form-horizontal" >
                    <div className={'form-group' }>
                        <label htmlFor="staffId" className="control-label col-sm-3" >Username</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="staffId"  value={username}  />
                        </div>
                    </div>
                    <div className={'form-group' }>
                        <label htmlFor="password" className="control-label col-sm-3" >Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="password"  value={password}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div></>
            )
            
        default :
            return(
                <div className="col-md-6 col-md-offset-3" style={{color:'white', textAlign:'center'}} >
                <h2>Login</h2>
                <form name="form" className="form-horizontal"   >
                    <div className={'form-group'   }>
                        <label htmlFor="staffId" className="control-label col-sm-3" >Username</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="staffId"  value={username}  />
                        </div>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password" className="control-label col-sm-3" >Password</label>
                        <div className="col-md-9">
                        <input type="password" className="form-control" name="password"  value={password}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            )
    }
}

Login.prototype = {
    login: PropTypes.shape({
        username: PropTypes.string.isRequired, 
        password:PropTypes.string.isRequired, 
        state:PropTypes.string.isRequired
    }) 
}

export default Login;