import React from "react";
class BeerCard extends React.Component {
  state = {
    isClicked: false
  };

  likeButton = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const {isClicked} = this.state
    const {name, tagline,abv,first_brewed,description} = this.props.beer
    return (
      <div className="main">
        <div>
          {name}
          <button
            className={isClicked ? "text-red" : "text- green"}
            onClick={this.likeButton}
          >
            {isClicked ? "liked" : "like"}
          </button>
        </div>
        <div>{tagline}</div>
        <div>{abv}</div>
        <div>{first_brewed}</div>
        <div>{description}</div>
      </div>
    );
  }
}

export default BeerCard;
