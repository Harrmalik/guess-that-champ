import React from 'react'

var Game = React.createClass({
    render() {
        return (
            <div>
                <header className="twelve wide column">

                </header>

                <section className="ui container">
                    <article>
                        <h2 className="ui header">
                          Guess That Champ!
                          <div className="sub header">Click Random Quote to hear a quote from a league of legends character</div>
                        </h2>

                        <div id="message" className="ui blue floating message">
                        </div>
                        <button id="btnRandomize" className="ui blue button">Random Quote</button>
                    </article>
                </section>

                <footer>

                </footer>
            </div>
        )
    }
})

export default Game
