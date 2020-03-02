import React from 'react'
import PropTypes from 'prop-types'
import './EmbeddedVideo.css';

/** The video in the iframe is to be shown or hidden by clicking on the heading text */



class EmbeddedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {iframeHidden: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      iframeHidden: !prevState.iframeHidden
    }));
  }

  render() {
    const {headingText, video} = this.props;
    const {iframeHidden} = this.state;
    return (
      <>
        <h3 onClick={this.handleClick} className={'embeddedvideo-heading'}>{headingText}</h3>
          <iframe
          className={iframeHidden ? 'embeddedvideo-frame-hidden' : undefined}
          title={video.title}
          src={video.src}
          height="300px"
          width="500px"
        />
      </>
    )
  }
}

EmbeddedVideo.propTypes = {
  headingText: PropTypes.string.isRequired,
  video: PropTypes.shape().isRequired
}

export default EmbeddedVideo
