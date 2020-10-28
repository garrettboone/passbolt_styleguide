
/**
 * Passbolt ~ Open source password manager for teams
 * Copyright (c) 2020 Passbolt SA (https://www.passbolt.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Passbolt SA (https://www.passbolt.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.passbolt.com Passbolt(tm)
 * @since         2.13.0
 */

import React from 'react';
import PropTypes from "prop-types";
import AppContext from "../../../contexts/AppContext";
import {withLoading} from "../../../contexts/Common/LoadingContext";


/**
 * This component displays the user profile theme
 */
class DisplayUserTheme extends React.Component {
  /**
   * Default constructor
   * @param props Component props
   */
  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  /**
   * Returns the component default state
   */
  get defaultState() {
    return {
      themes: [], // The list of available theme
      selectedTheme: null // The current user selected theme
    };
  }

  /**
   * Whenever the component is mounted
   */
  async componentDidMount() {
    await this.populate();
  }


  /**
   * Binds the component handlers
   */
  bindHandlers() {
    this.handleThemeSelected = this.handleThemeSelected.bind(this);
  }

  /**
   * Whenever the user select a theme
   * @param event A DOM event
   * @param theme A theme
   */
  async handleThemeSelected(event, theme) {
    await this.select(theme);
  }

  /**
   * Populates the component with data
   */
  async populate() {
    this.props.loadingContext.add();
    const themes = await this.context.port.request('passbolt.themes.find-all');
    const selectedTheme = this.context.userSettings.getTheme();
    await this.setState({themes, selectedTheme});
    this.props.loadingContext.remove();
  }

  /**
   * Selects a new theme
   */
  async select(theme) {
    const isAlreadySelected = this.state.selectedTheme.id === theme.id;
    if (!isAlreadySelected) {
      await this.setState({selectedTheme: theme});
      await this.context.userSettings.setTheme(theme);
      this.context.port.request("passbolt.themes.change", theme.name)
        .then(this.onSelectSuccess.bind(this))
        .catch(this.onSelectFailure.bind(this));
    }
  }

  /**
   * Whenever the a new theme has been selected with success
   */
  onSelectSuccess() {

  }

  /**
   * Whenever the a new theme has been selected with failure
   */
  onSelectFailure() {

  }

  /**
   * Render the component
   */
  render() {
    const selectedClass = theme => this.state.selectedTheme.id === theme.id ? 'selected' : '';
    return (
      <div className="grid grid-responsive-12">
        <div className="row">
          <h3>Theme</h3>
          <div className="row themes">
            <div className="col12">
              <ul>
                {
                  this.state.themes.map(theme => (
                    <li key={theme.id}>
                      <div className={`main-cell row theme ${selectedClass(theme)}`}>
                        <a onClick={event => this.handleThemeSelected(event, theme)}>
                          <img src={theme.preview}/>
                          <div className="theme-desc">
                            {theme.name}
                          </div>
                        </a>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DisplayUserTheme.contextType = AppContext;
DisplayUserTheme.propTypes = {
  dialogContext: PropTypes.object, // The dialog context
  loadingContext: PropTypes.object // The dialog context
};

export default withLoading(DisplayUserTheme);



