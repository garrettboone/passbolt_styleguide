
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
 * @since         2.11.0
 */

import {render} from "@testing-library/react";
import React from "react";
import InstallExtension from "./InstallExtension";

/**
 * The PasswordSidebarCommentSection component represented as a page
 */
export default class InstallExtensionPage {
  /**
   * Default constructor
   * @param appContext An app context
   * @param props Props to attach
   */
  constructor() {
    this._page = render(
      <InstallExtension/>
    );
  }

  /**
   * Returns the title
   */
  get title() {
    return this._page.container.querySelector('.install-extension h1').textContent;
  }

  /**
   * Returns the browser image
   */
  get browser() {
    return this._page.container.querySelector('.install-extension a');
  }

  /**
   * Returns the message
   */
  get message() {
    return this._page.container.querySelector('.install-extension p').textContent;
  }

  /**
   * Returns the download button
   */
  get download() {
    return this._page.container.querySelector('.install-extension .form-actions .button.primary.big').textContent;
  }

  /**
   * Returns the link why browser not supported
   */
  get link() {
    return this._page.container.querySelectorAll('.install-extension .form-actions a')[1].textContent;
  }

  /**
   * Returns true if the page object exists in the container
   */
  exists() {
    return this.title !== null;
  }
}
