import React from "react";
class BeerCard extends React.Component {
  state = {
    isClicked: false
  };

  likeButton = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <div className="main">
        <div>
          {this.props.beer.name}
          <button
            className={this.state.isClicked ? "text-red" : "text- green"}
            onClick={this.likeButton}
          >
            {this.state.isClicked ? "liked" : "like"}
          </button>
        </div>
        <div>{this.props.beer.tagline}</div>
      </div>
    );
  }
}

export default BeerCard;
