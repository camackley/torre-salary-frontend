import React from "react";
import { Redirect } from "react-router-dom";

/* Components */
import Form from "../components/Form.jsx";

/* Assets */
import home_image from "../assets/home_image.png";

/* Utils */
import NetWorkHelper from "../utils/NetworkHelper.js";

class Home extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {},
    infoUser: null,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClick();
  };

  handleClick = (e) => {
    this.setState({
      loading: true,
    });
    try {
      switch (e.target.name) {
        case "btnStart":
          this.getSkill();
          break;

        case "btnCalculate":
          this.getSpectedSalary();
          break;

        default:
          this.setState({
            loading: false,
          });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: "Enter the data",
      });
    }
  };

  getSkill = () => {
    if (!this.state.form.txtUserName) {
      this.setState({
        error: "You have to enter your Torre User o Genome link",
        loading: false,
      });
    } else {
      let username = this.state.form.txtUserName;
      if (username.split("https://bio.torre.co/").length > 1) {
        username = username.split("https://bio.torre.co/")[1];
        username = username.split("/")[1];
        username = username.split("?")[0];
      }
      NetWorkHelper()
        .httpGet("user/salary/skills/" + username)
        .then((data) => {
          data.unshift({ name: "Select your best Skill", id: 0 });
          this.setState({
            loading: false,
            infoUser: data,
            error: null
          });
        })
        .catch((error) => {
          this.setState({
            loading: false,
            error: "User not found",
          });
        });
    }
  };

  getSpectedSalary = () => {
    if (
      this.state.form.skill === "Select your best Skill" ||
      !this.state.form.skill
    ) {
      this.setState({
        error: "You have to selct one skill",
        loading: false,
      });
    } else {
      this.setState({
        data: {
          username: this.state.form.txtUserName,
          skill: this.state.form.skill,
        },
      });
    }
    //return <Redirect to={{pathname: "result/", data: data}}/>

    /* let data = {skill: this.state.form.skill}
    NetWorkHelper()
      .httpPots("user/salary/"+this.state.form.txtUserName, data)
      .then(data=>{
        console.log(data);
        this.setState({
          loading: false
        })
      })
      .catch(error=>{
        this.setState({
          loading: false,
          error: "We couldn't get the results, sorry ☹"
        })
      }) */
  };

  render() {
    if (this.state.data) {
      return <Redirect to={{ pathname: "result/", data: this.state.data }} />;
    }

    return (
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <div className="text-center">
              <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Torre</h1>
              <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Salary</h1>
            </div>

            <p className="text-torre mt-5" style={{ fontSize: "20px" }}>
              Calculate the <span className="text-bold">salary</span> you can
              aspire to, based on your{" "}
              <span className="text-bold">skills and experience</span>
            </p>
            <Form
              onSubmit={this.handleSubmit}
              onClick={this.handleClick}
              onChange={this.handleChange}
              error={this.state.error}
              loading={this.state.loading}
              infoUser={this.state.infoUser}
            />
          </div>
          <div className="d-none d-md-block col-5 offset-1">
            <img
              className="d-block mx-auto"
              src={home_image}
              alt="men with money"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
