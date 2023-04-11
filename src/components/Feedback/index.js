import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <h1 className="heading">
          How satisfied are you with our customer Support performance{' '}
        </h1>
        <ul className="emojis-List">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" className="btn" onClick={this.onClickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} className="image" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="head">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="container">
        <div className="card">
          {isFeedback
            ? this.renderFeedbackQuestion()
            : this.renderThankYouScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
