import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {CardActionArea} from "@material-ui/core";
import logo from '../../music.svg'
import {withRouter} from "react-router-dom"
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minWidth:100,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(127, 209, 225, .5)',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    avatar: {
        backgroundColor: red[500],
    },
    username: {
        fontSize: "small"
    },
    location: {
        paddingLeft: '10%',
        paddingBottom:'10%',
        fontSize: "small"
    },
    postName:{
        textAlign: "center",
        paddingBottom: "5%",
        paddingLeft: "1%",
        paddingRight: "1%",
        wordWrap: "break-word"
    }
}));

const CardPost = (props) => {
    const classes = useStyles();

    const {history} = props;
    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        A
                    </Avatar>
                }

                title= {props.title}
                subheader="20 грудня, 2020"

            />
            <CardActionArea onClick={() => handleMenuClick(`post/${props.id}`)}>
                <Typography className={classes.postName}  variant="body1" color="textPrimary" component="h4">
                    Я СУПЕР МУЗИКАНТ ШУКАЮ ГУРТ!
                </Typography>
                <CardMedia
                    className={classes.media}
                    image={logo}

                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Я, супер-гітарист-басист-піаніст-вокаліст-скрипач-композитор, шукаю гурт
                        світового класу, а то й щось покраще, гонорари від декількох мільйонів.

                    </Typography>
                </CardContent>
            </CardActionArea>
            <Typography className={classes.location} component="p">
                Львів
            </Typography>

        </Card>
    );
}
export default withRouter(CardPost)