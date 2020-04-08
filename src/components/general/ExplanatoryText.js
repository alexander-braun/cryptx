import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux'
import explanatoryTextsObj from './explanatoryTextsData'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: theme.typography.pxToRem(13)
  },
  link: {
    marginTop: '10px',
    fontSize: theme.typography.pxToRem(14)
  }
}));

const ExplanatoryText = (props) => {
  const classes = useStyles()
  if(!explanatoryTextsObj[props.method]) return null
  let expText = props.direction !== 'crack' ? (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.heading}>More Details</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.body}>
          {explanatoryTextsObj[props.method]['normal']}
        </Typography>
        <Typography className={classes.link}>
          <a href={explanatoryTextsObj[props.method]['linksrc']} target="blank">{explanatoryTextsObj[props.method]['linkname']}</a>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : (
    <div className="controller explanation">
      <p className="block_method_explanation">
        {explanatoryTextsObj[props.method]['crack']}
      </p>
      <a href={explanatoryTextsObj[props.method]['linksrc']} target="blank">{explanatoryTextsObj[props.method]['linkname']}</a>
    </div>
  )
  return expText
}

const mapStateToProps = state => ({
  direction: state.toggleDirection.direction,
  method: state.method.method
})

export default connect(mapStateToProps)(ExplanatoryText)


