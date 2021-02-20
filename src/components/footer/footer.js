import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  // TODO: Get this to the bottom without all of that padding
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        {/* <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography> */}
        {/* <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography> */}
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Bortel Shop
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: 'none',
//     },
//   },
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbarTitle: {
//     flex: 1,
//   },
//   link: {
//     margin: theme.spacing(1, 1.5),
//   },
//   heroContent: {
//     padding: theme.spacing(8, 0, 6),
//   },
//   cardHeader: {
//     backgroundColor: theme.palette.grey[200]
//   },
//   fullHeight: {
//     height: "100%"
//   },
//   footer: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     marginTop: theme.spacing(8),
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//   },
// }));

// function Footer() {
//   const classes = useStyles();
  
//   return(
//     <>
//       {/* Footer */}
//       <Container maxWidth="lg" component="footer" className={classes.footer}>
//         <Grid container spacing={4} justify="space-around">

//           {/* How do these 3 combine to make this a responsive grid? */}
//           <Grid item xs={12} md={6} lg={3}>
//             <Copyright />
//             {/* <ul>
//               <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
//               <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
//             </ul> */}
//           </Grid>
//         </Grid>
//       </Container>

//     </>
//   )

// }

// export default Footer