import React from "react";
import logo from "../assets/logo_salary.png";

function JobCard(props){
    return (
        <div className="col-12 col-md-4 mb-3" key={props.job.id}>
          <div className="card h-100 bg-dark">
            <img
              src={
                props.job.organizations[0].picture === null
                  ? logo
                  : props.job.organizations[0].picture
              }
              className="card-img-top"
              alt={props.job.organizations[0].name}
            />
            <div className="card-body">
              <h5
                className="card-title text-secondary-torre"
                style={{ fontWeight: "bold" }}
              >
                {props.job.objective}
              </h5>
              <p className="card-text mb-0">{props.job.type}</p>
              <p className="card-text mb-0">
                {props.job.organizations[0].name}
              </p>
              <p className="card-text mb-0">{props.job.locations[0]}</p>
              <p className="card-text mb-0">
                {props.job.compensation.data.currency}{" "}
                {props.job.compensation.data.maxAmount}
              </p>
              <p className="card-text">
                {props.job.compensation.data.periodicity}
              </p>
            </div>
            <div className="card-footer">
              <a
                href={"https://torre.co/props.jobs/" + props.job.id}
                className="btn btn-torre w-100"
              >
                VIEW
              </a>
            </div>
          </div>
        </div>
      );
}

export default JobCard;