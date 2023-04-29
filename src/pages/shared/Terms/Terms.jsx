import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2 className="text-center mt-3">Terms & Conditions</h2>
      <ul className="d-flex flex-column gap-3">
        <li>
          <strong>Intellectual Property:</strong> All content on the website,
          including text, images, videos, and any other media, is owned by the
          website and protected by copyright and other intellectual property
          laws. Users are not permitted to copy, reproduce, distribute, or
          publish any content from the website without prior written consent.
        </li>

        <li>
          <strong>User-generated Content:</strong> If the website allows users
          to submit content, such as comments or articles, the website reserves
          the right to remove or modify any content that is deemed inappropriate
          or violates the website's policies. By submitting content to the
          website, users grant the website a non-exclusive, perpetual,
          royalty-free license to use, reproduce, publish, and distribute the
          content in any form or media.
        </li>

        <li>
          <strong>Accuracy of Information:</strong> The website strives to
          provide accurate and reliable information, but it cannot guarantee the
          accuracy or completeness of all information. Users are responsible for
          verifying any information before relying on it.
        </li>

        <li>
          <strong>User Conduct:</strong> Users must not use the website to
          engage in any illegal, fraudulent, or harmful activity, including but
          not limited to hacking, spamming, or spreading malware. Users must
          also respect the privacy and rights of others, and not engage in any
          behavior that is threatening, abusive, or harassing.
        </li>

        <li>
          <strong>Disclaimer of Liability:</strong> The website is not liable
          for any damages, losses, or expenses arising from the use of the
          website, including but not limited to direct, indirect, incidental, or
          consequential damages.
        </li>

        <li>
          <strong>Termination:</strong> The website reserves the right to
          terminate or suspend access to the website at any time, without prior
          notice, for any reason.
        </li>

        <li>
          <strong>Governing Law:</strong> These terms and conditions are
          governed by the laws of the jurisdiction where the website is based.
        </li>

        <li>
          <strong>Changes to Terms and Conditions:</strong> The website reserves
          the right to modify or update these terms and conditions at any time,
          without prior notice. Users should review the terms and conditions
          regularly to ensure they are aware of any changes.
        </li>
      </ul>
      <p className="text-center">
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
