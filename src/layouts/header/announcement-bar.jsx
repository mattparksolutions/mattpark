import React, { useState } from 'react'
import { makeStyles, createStyles, Typography, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            // backgroundColor: theme.text.primary,
            backgroundColor: 'black',
            padding: 0,
            margin: 0,
            height: '4.5vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '& > h6': {
                width: '100%',
                fontSize: 14,
                marginBottom: 0,
                // color: theme.text.inverse,
            },
        },
    }),
)
const AnnouncementBar = () => {
    const classes = useStyles()
    const [announcementShown, closeAnnouncement] = useState(true)

    return (
        announcementShown && (
            <div className={classes.root}>
                <Typography variant={'h6'}>COVID-19 Update</Typography>
                <IconButton aria-label="close" onClick={() => closeAnnouncement(false)} color={'inherit'}>
                    <Close />
                </IconButton>
            </div>
        )
    )
}
export default AnnouncementBar
