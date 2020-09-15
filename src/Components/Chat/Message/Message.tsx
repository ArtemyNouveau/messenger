import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import useStyles from './classes'

export default ({text, isMine, author, imageUrl, date}: { text: string, isMine: boolean, author: string, imageUrl: string | null, date: string }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.row, {
            [classes.mine]: isMine,
            [classes.notMine]: !isMine
        })}>
            <Card className={clsx(classes.message)}>
                <CardHeader
                    avatar={
                        <Avatar alt={author} className={classes.avatar}/>
                    }
                    title={author}
                    subheader={date}
                    className={classes.header}
                />
                {
                    imageUrl ?
                        <CardMedia
                            className={classes.media}
                            image={imageUrl}
                            title="Paella dish"
                        /> : null
                }
                <CardContent className={classes.textContent}>
                    <Typography className={classes.text} paragraph color="textSecondary" component="p">
                        {text}
                    </Typography>
                </CardContent>
                <div/>
            </Card>
        </div>
    )
}

