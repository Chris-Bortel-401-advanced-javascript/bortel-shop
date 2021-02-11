import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSelector} from 'react-redux';
// import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
}));

function CurrentCategory() {
  const classes = useStyles();

  const activeCategory = useSelector(state => state.categories.activeCategory)

  return(

    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
   
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {activeCategory.name}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {activeCategory.description}
        </Typography>
      </Container>
    </>
  )
  
}

export default CurrentCategory;