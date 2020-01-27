import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, Grid, Button } from "semantic-ui-react";

import { nodeOrElementType } from "../utils";

const TogglingContent = props => {
  const {
    trigger,
    content,
    children,
    buttonLabel,
    defaultVisibility = false,
  } = props;
  const [contentVisible, setContentVisibility] = useState(defaultVisibility);

  return (
    <Grid centered container padded>
      <Accordion>
        {trigger ? (
          <Accordion.Title
            onClick={() => setContentVisibility(!contentVisible)}
          >
            {trigger}
          </Accordion.Title>
        ) : (
          <Accordion.Title>
            <Button
              basic
              color="blue"
              onClick={() => setContentVisibility(!contentVisible)}
              content={`${contentVisible ? "Hide " : "Show "} ${buttonLabel}`}
            />
          </Accordion.Title>
        )}
        <Accordion.Content
          active={contentVisible}
          content={content || children}
        />
      </Accordion>
    </Grid>
  );
};

TogglingContent.propTypes = {
  trigger: PropTypes.element,
  content: nodeOrElementType,
  children: nodeOrElementType,
  buttonLabel: PropTypes.string,
};

export default TogglingContent;
