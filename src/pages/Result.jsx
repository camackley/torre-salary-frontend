import React from "react";
import { Redirect } from "react-router-dom";

/* Assets */
import loading from "../assets/loading.gif";
import check_icon from "../assets/icon/check_icon.png";
import user_icon from "../assets/icon/user_icon.png";

/* Utils */
import NetWorkHelper from "../utils/NetworkHelper.js";
import JobCard from "../components/JobCard";

class Result extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    if (this.props.location.data) {
      let { data } = this.props.location;
      this.setState({ data: data });
      this.getSpectedSalary(data);
    }else{
      this.setState({
        loading: false
      })
    }
  }

  getSpectedSalary = (data) => {
    let dataSend = { skill: data.skill };
    NetWorkHelper()
      .httpPots("user/salary/" + data.username, dataSend)
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: "We couldn't get the results, sorry ☹",
          loading: false,
        });
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="col-12 offset-md-3 col-md-6 text-center">
            <img
              className="w-100"
              src={loading}
              alt="loading..."
              style={{ with: "100%" }}
            />
            <p style={{ fontWeight: "bold", fontSize: "30px" }}>
              We’re calculating your salary aspire...
            </p>
          </div>
        </div>
      );
    }

    if (!this.state.data) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="offset-4 col-4 offset-md-5 col-md-2 img-torre mb-3">
            <img
              src={!this.state.data.user.person.picture ? user_icon :this.state.data.user.person.picture}
              alt={this.state.data.user.person.name}
            />
          </div>
          <div className="col-12 text-center">
            <span>
              <h4>
                {this.state.data.user.person.name}
                {this.state.data.user.person.verified && (
                  <img src={check_icon} alt="checked person" className="ml-2" />
                )}
              </h4>
            </span>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-10 offset-1 offset-md-3 col-md-6 text-center text-secondary-torre card-torre p-2">
            <h3>Espected salary</h3>
            <h3>
              {this.state.data.salaryEspected.currency}{" "}
              {this.state.data.salaryEspected.amount}/
              {this.state.data.salaryEspected.periodicity}
            </h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2>Jobs Opportunities</h2>
          </div>
          {this.state.data.jobs.map((job) => (
            <JobCard job={job}  key={job.id}/>
          ))}
        </div>
        <div className="row mb-5 mt-3">
          <div className="col-12">
            <a
              href={"https://torre.co/en/search/jobs"}
              className="btn btn-torre w-100"
            >
              VIEW MORE OPPORTINIES
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
