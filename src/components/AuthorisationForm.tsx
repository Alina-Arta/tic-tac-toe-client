import React, { useState } from 'react';
import { TextField, Button, AppBar, Tabs, Tab, Link } from '@material-ui/core';
import styles from './AuthorisationForm.module.scss'
import { ApiClient } from '../classes/services/ApiClient'

export const ToolBar = () => {
    return(
    <div>
        <AppBar>
            <Tabs value={null}>
                <Tab onClick={() => window.location.assign('/leaderboard')} label="Results Page" />
                <Tab label="Exit" />
            </Tabs>
        </AppBar>
    </div>
    );
}

export const AuthorisationForm = (props: any) => {

    const [userName, setUserName] = useState('')

    return (
        <div className={styles.root}>
            <ToolBar/>
            <div className={styles.block}>
                <div className={styles.blockSm}>
                    <TextField
                        id='name'
                        className={styles.textField}
                        placeholder={'username'}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className={styles.blockSm}>
                    <Button className={styles.button}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            ApiClient.login(userName)
                            //let token = ;
                            //localStorage.setItem('key', token)
                        }
                        }
                    >
                        Login</Button>
                </div>
            </div>
        </div>
    );
}