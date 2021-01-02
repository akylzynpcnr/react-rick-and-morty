import React from "react";

const About = props => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bg-light p-5">
            <h1 class="display-6">About</h1>
            <p>
              Thanks for API:
              <mark>
                <a href="https://rickandmortyapi.com/">
                  https://rickandmortyapi.com/
                </a>
              </mark>{" "}
            </p>
            <p>Zeynep Akyel Çınar</p>
            <blockquote class="blockquote">
              <p>"Wubba-lubba-dub-dub!"</p>
            </blockquote>
            <img
              style={{ width: "600px", maxWidth: "100%" }}
              src="https://www.indiewire.com/wp-content/uploads/2017/07/rick-and-morty.png?resize=800,449"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
