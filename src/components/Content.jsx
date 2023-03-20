import './Content.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="container">
      <div className="content-container">
        <div className="card">
          <div className="card-img">
            <img src="/assets/use.png" alt="Use" />
          </div>
          <div className="card-info">
            <h2 className="title">Using Abstract</h2>
            <p className="text">
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/assets/account.png" alt="account" />
          </div>
          <div className="card-info">
            <h2 className="title">Manage your account</h2>
            <p className="text">
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/assets/organise.png" alt="organise" />
          </div>
          <div className="card-info">
            <h2 className="title">Manage organizations, teams, and projects</h2>
            <p className="text">
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/assets/billing.png" alt="billing" />
          </div>
          <div className="card-info">
            <h2 className="title">Manage billing</h2>
            <p className="text">Change subscriptions and payment details.</p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/assets/authenticate.png" alt="authenticate" />
          </div>
          <div className="card-info">
            <h2 className="title">Authenticate to Abstract</h2>
            <p className="text">
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="/assets/support.png" alt="support" />
          </div>
          <div className="card-info">
            <h2 className="title">Abstract support</h2>
            <p className="text">Get in touch with a human.</p>
            <Link to="/learn_more">
              Learn more <img src="/assets/long-right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
