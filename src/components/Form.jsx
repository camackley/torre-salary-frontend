import React from "react";

class Form extends React.Component {
  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }

    if (this.props.infoUser) {
      return (
        <React.Fragment>
          <form className="mt-3" onSubmit={this.props.onSubmit}>
            <select
              name="skill"
              className="form-control select-torre"
              onChange={this.props.onChange}
            >
              {this.props.infoUser.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
            <button
              name="btnCalculate"
              className="btn btn-torre form-control mt-3"
              onClick={this.props.onClick}
            >
              CALCULATE
            </button>
            {this.props.error && (
            <div className="alert alert-danger mt-2" role="alert">
              {this.props.error}
            </div>
          )}
          </form>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <form className="mt-3" onSubmit={this.props.onSubmit}>
          <input
            type="text"
            className="form-control input-torre"
            name="txtUserName"
            placeholder="Enter your Torre user or Genome Link"
            onChange={this.props.onChange}
          />
          <button
            name="btnStart"
            className="btn btn-torre form-control mt-3"
            onClick={this.props.onClick}
          >
            START NOW
          </button>
          {this.props.error && (
            <div className="alert alert-danger mt-2" role="alert">
              {this.props.error}
            </div>
          )}
        </form>
        <div className="text-center mt-3 mb-3">OR</div>
        <div className="text-center">
          <a
            href="https://bio.torre.co/_a/your-bio"
            className="text-action-torre"
          >
            GET MY GENOME
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
